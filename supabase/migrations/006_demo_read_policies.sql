-- ============================================================
-- 006_demo_read_policies.sql
-- TEMPORARY POLICY: Allow public reads for Development/Demo
-- Run this in the Supabase SQL Editor
-- ============================================================

-- Allow the Next.js app to read bookings anonymously for the Tracker demo
DROP POLICY IF EXISTS "bookings: public read for demo" ON bookings;
CREATE POLICY "bookings: public read for demo"
  ON bookings FOR SELECT
  USING (true);

-- Allow the Next.js app to read the booking status history anonymously
DROP POLICY IF EXISTS "bsh: public read for demo" ON booking_status_history;
CREATE POLICY "bsh: public read for demo"
  ON booking_status_history FOR SELECT
  USING (true);

-- Allow the Next.js app to read provider locations blindly
DROP POLICY IF EXISTS "psa: public read for demo" ON provider_service_areas;
CREATE POLICY "psa: public read for demo"
  ON provider_service_areas FOR SELECT
  USING (true);
