-- ============================================================
-- 005_tracker_seed.sql
-- Seed script for Tracker Page Booking (BK-20231024-0012)
-- Run this in the Supabase SQL Editor
-- ============================================================

DO $$
DECLARE
  v_customer_id uuid;
  v_provider_id uuid;
  v_service_id uuid;
  v_provider_service_id uuid;
  v_city_id uuid;
  v_area_id uuid;
  v_booking_id uuid;
BEGIN
  -- 1. Ensure Arjun Mehta (Customer) exists
  SELECT id INTO v_customer_id FROM profiles WHERE full_name = 'Arjun Mehta' AND role = 'customer' LIMIT 1;
  IF v_customer_id IS NULL THEN
    -- Fallback: Create him if 003_dashboard_seed.sql wasn't run
    -- (This usually requires auth user creation first, so we assume an existing customer or just grab any customer)
    SELECT id INTO v_customer_id FROM profiles WHERE role = 'customer' LIMIT 1;
    IF v_customer_id IS NULL THEN
       RAISE EXCEPTION 'No customer found. Please run earlier seeds or register a customer.';
    END IF;
  END IF;

  -- 2. Ensure Priya Sharma (Provider) exists
  SELECT id INTO v_provider_id FROM profiles WHERE full_name = 'Priya Sharma' AND role = 'provider' LIMIT 1;
  IF v_provider_id IS NULL THEN
     SELECT id INTO v_provider_id FROM profiles WHERE role = 'provider' LIMIT 1;
     IF v_provider_id IS NULL THEN
         RAISE EXCEPTION 'No provider found. Please run earlier seeds or register a provider.';
     END IF;
  END IF;

  -- 3. Get 'Home Deep Clean' service id, or fallback
  SELECT id INTO v_service_id FROM services WHERE name = 'Home Deep Clean' LIMIT 1;
  IF v_service_id IS NULL THEN
     SELECT id INTO v_service_id FROM services LIMIT 1;
  END IF;
  
  -- 3b. Get or create the provider_service_id for this provider and service
  SELECT id INTO v_provider_service_id FROM provider_services 
  WHERE provider_id = v_provider_id AND service_id = v_service_id LIMIT 1;
  
  IF v_provider_service_id IS NULL THEN
     -- if she doesn't offer it explicitly, insert it for the sake of the seed
     INSERT INTO provider_services (provider_id, service_id, custom_price, is_active)
     VALUES (v_provider_id, v_service_id, 1499, true)
     RETURNING id INTO v_provider_service_id;
  END IF;

  -- 4. Get Koramangala area
  SELECT id INTO v_area_id FROM areas WHERE name = 'Koramangala' LIMIT 1;
  IF v_area_id IS NULL THEN
    SELECT id INTO v_area_id FROM areas LIMIT 1;
  END IF;

  -- 5. Set up booking: BK-20231024-0012 (If it exists, avoid inserting)
  SELECT id INTO v_booking_id FROM bookings WHERE booking_number = 'BK-20231024-0012' LIMIT 1;
  
  IF v_booking_id IS NULL THEN
      -- Note: Due to the `generate_booking_number` trigger, we usually can't force a specific ID.
      -- To guarantee BK-20231024-0012, we must temporarily disable the trigger or manually override.
      -- However, since the tracker explicitly searches for this ID, we will INSERT it. 
      -- A safer approach for a demo is to simply fetch the *latest* booking in `tracker/page.jsx`,
      -- but since the page is hardcoded to BK-20231024-0012, we will attempt to insert it directly.
      
      -- Disable trigger temporarily to allow explicit booking_number if needed, 
      -- but triggers might not fire if not superuser. We will just let the trigger run and HOPE
      -- or just insert and UPDATE the booking number afterward if RLS allows.
      
      -- Let's insert a fresh booking and forcefully update its booking_number (usually requires trigger bypass).
      -- For the sake of this migration, we'll INSERT a standard row.
      INSERT INTO bookings (
          customer_id, provider_id, provider_service_id, area_id, address_line,
          status, scheduled_at, quoted_price, started_at
      )
      VALUES (
          v_customer_id, v_provider_id, v_provider_service_id, v_area_id, '45 CMH Road, Flat 3B',
          'in_progress', '2023-10-24 10:00:00+05:30', 1499, '2023-10-24 10:00:00+05:30'
      )
      RETURNING id INTO v_booking_id;

      -- Forcefully override the booking number assigned by the trigger so the tracker page finds it
      UPDATE bookings SET booking_number = 'BK-20231024-0012' WHERE id = v_booking_id;
  END IF;

  -- 6. Ensure booking_status_history rows exist for timeline steps.
  -- The tracker expects: requested -> confirmed -> in_progress
  
  -- Check if history exists
  IF NOT EXISTS (SELECT 1 FROM booking_status_history WHERE booking_id = v_booking_id AND to_status = 'requested') THEN
      INSERT INTO booking_status_history (booking_id, from_status, to_status, reason, created_at)
      VALUES (v_booking_id, NULL, 'requested', 'Booking ID: BK-20231024-0012', '2023-10-20 09:00:00+05:30');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM booking_status_history WHERE booking_id = v_booking_id AND to_status = 'confirmed') THEN
      INSERT INTO booking_status_history (booking_id, from_status, to_status, reason, created_at)
      VALUES (v_booking_id, 'requested', 'confirmed', 'Priya accepted the booking.', '2023-10-21 14:30:00+05:30');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM booking_status_history WHERE booking_id = v_booking_id AND to_status = 'in_progress') THEN
      INSERT INTO booking_status_history (booking_id, from_status, to_status, reason, created_at)
      VALUES (v_booking_id, 'confirmed', 'in_progress', 'Provider arrived at location.', '2023-10-24 10:00:00+05:30');
  END IF;

END $$;
