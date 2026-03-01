-- ============================================================
-- 003_dashboard_seed.sql
-- Run in Supabase SQL Editor
-- This script creates a test customer, test providers, and 
-- seeds the 4 dummy bookings used by the dashboard.
-- ============================================================

DO $$
DECLARE
  v_customer_id uuid := gen_random_uuid();
  v_priya_id uuid := gen_random_uuid();
  v_ramesh_id uuid := gen_random_uuid();
  v_vikram_id uuid := gen_random_uuid();
  v_suresh_id uuid := gen_random_uuid();
  
  v_city_mumbai uuid;
  v_area_bandra uuid;
  
  v_svc_clean uuid;
  v_svc_pipe uuid;
  v_svc_ac uuid;
  v_svc_switch uuid;

  v_ps_priya uuid;
  v_ps_ramesh uuid;
  v_ps_vikram uuid;
  v_ps_suresh uuid;
BEGIN
  -- 1. Get locations
  SELECT id INTO v_city_mumbai FROM cities WHERE name = 'Mumbai';
  SELECT id INTO v_area_bandra FROM areas WHERE name = 'Bandra West' AND city_id = v_city_mumbai;

  -- 2. Get services
  SELECT id INTO v_svc_clean FROM services WHERE name = 'Home Deep Clean';
  SELECT id INTO v_svc_pipe  FROM services WHERE name = 'Pipe Repair';
  SELECT id INTO v_svc_ac    FROM services WHERE name = 'AC Service';
  SELECT id INTO v_svc_switch FROM services WHERE name = 'Switchboard Repair';

  -- 3. Create users in auth.users (this triggers handle_new_user to create profiles)
  INSERT INTO auth.users (id, instance_id, aud, role, email, encrypted_password, raw_user_meta_data) VALUES
    (v_customer_id, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'arjun@example.com', 'dummy', '{"full_name": "Arjun Mehta", "role": "customer"}'),
    (v_priya_id, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'priya@example.com', 'dummy', '{"full_name": "Priya Sharma", "role": "provider"}'),
    (v_ramesh_id, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'ramesh@example.com', 'dummy', '{"full_name": "Ramesh Patel", "role": "provider"}'),
    (v_vikram_id, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'vikram@example.com', 'dummy', '{"full_name": "Vikram AC Services", "role": "provider"}'),
    (v_suresh_id, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'suresh@example.com', 'dummy', '{"full_name": "Suresh Electrical", "role": "provider"}');

  -- Update Arjun's avatar
  UPDATE profiles SET avatar_url = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyWoeBgrtIOUpQ8F9NGTpAx61h8EdeJHhaYt-TF9Tt0e_Gkr4Aq3WyYz6GT04_DHYcr_4X82EqyqvpcdROdJp1vsrHbWvNBdOIoBu5cxpYuzsrzxfhsAwzTiP8cgfGBVBQbsR1pGxBS5K5XoPeLZZ_hbbZWF4rg29Du237Pjk4HNLUHNi78KFh4Rvsa4TPllDtk5EcymhZtJfeemgmSdHU1fKajJWC0b8wVYTUw4jIdfK77YmWF1iWsgHoc6xzLHfM0_U-qvhDmt3X' WHERE id = v_customer_id;

  -- Update Provider avatars
  UPDATE profiles SET avatar_url = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsvvd59D3U98JhvKJxhJOacHaNgo8XfNwIuC3CXFyf2nJ8Lg49ajApZEwXrcDycDFWcB4BbaypqxFb0WU6VbrEU8lv7E9ltj71ePOFYDbRINWt1FOtRnGJiTU3rrPyIoHneMwewJHPuzfufqc6_GF8DTtqNauXn4qAypSyuYV8q8-16Opi2ca7mTDdb-dB3237MgHutZ2nAvgWb1JpF_cEhX0Yx222uhVu0ukHJCnH_7QHiHWz6HPmxpfI2L1iRUR_WtRafbEuqqiU' WHERE id = v_priya_id;
  UPDATE profiles SET avatar_url = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaK7mJbGkqeEp0V422LNURpT9FqFgX-mo183v2jDecmMiJXbzn9JtDCbnaS136uBGZGVZscEJtWFIcObhMTU5LxlAolvXUaGypoVrjfMAVEiTP34g96Q2ZK0rV_HjqafxdAHZMMiiSJML_Y6vRLnHeSvL14hV9shb61vb5rsVVw3FeWGbj-Vv_sjwoNhqo4F6EJe0DlZ3szez3CvH-ZnPfCoZJ7HkN7ME5D_YHvixZEKevTF1yTdCq9k-OE_uHfFuiqct-1Uh0BjHP' WHERE id = v_ramesh_id;
  UPDATE profiles SET avatar_url = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-kKg6j6ygiT55nfTgKl2P08ztjf5sM4lYTSff6SC5FjAIgi1nHytZ_EVIeKHA790WVIZ_vR7wIrCcmFsrnLq1uf2XRyILeUHpSQWJU1PsDBJu87AehRh5DIi0TTTteoZy8eA5U0VdusoYx-RaxOp94wF7zrbydPcjvqCB2ifkadWnoJl8SzDpXkMkamX8Viot4qTkmrVcXJ5EzkYq-dV9Eo5DFw45w4qnJjyvqoDbB0Wcbvr1NSJbYq4uQrVMVdpqFke3vgIIQGbK' WHERE id = v_vikram_id;
  UPDATE profiles SET avatar_url = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf6iiH3WJPYzR10i_z3qc9YaLUDJHqAg5aENnTMRhLjvCvWYbsS32rLEvYjqGD0T6NU0vmjM1xOR0bMuRoNhbGsuRcD_x41Mm3o3Hu0Feyr8Ba3E-VDI4r_gKbGXdIi3TYj36w8uFQwV9Sxale7Awz59dgpxnPtq675L5PfLRxQg7SYHOXtmxhmpVV8d_pbmIEM1TtmxlOgrq24MHHw6Blc6wq7kvBhIMGzpFjwbrGYl2W-hJ1w6LUQRdm29l7ArpH2oz7ldlokYd4' WHERE id = v_suresh_id;

  -- 4. Create provider_profiles
  INSERT INTO provider_profiles (id, status, is_available) VALUES
    (v_priya_id, 'approved', true),
    (v_ramesh_id, 'approved', true),
    (v_vikram_id, 'approved', true),
    (v_suresh_id, 'approved', true);

  -- 5. Create provider_services
  INSERT INTO provider_services (provider_id, service_id, custom_price) VALUES 
    (v_priya_id, v_svc_clean, 1499) RETURNING id INTO v_ps_priya;
  INSERT INTO provider_services (provider_id, service_id, custom_price) VALUES 
    (v_ramesh_id, v_svc_pipe, 499) RETURNING id INTO v_ps_ramesh;
  INSERT INTO provider_services (provider_id, service_id, custom_price) VALUES 
    (v_vikram_id, v_svc_ac, 699) RETURNING id INTO v_ps_vikram;
  INSERT INTO provider_services (provider_id, service_id, custom_price) VALUES 
    (v_suresh_id, v_svc_switch, 349) RETURNING id INTO v_ps_suresh;

  -- 6. Insert Bookings (temporarily disable constraints if necessary, but we'll fulfill them)
  INSERT INTO bookings (
    customer_id, provider_id, provider_service_id, status, scheduled_at, 
    address_line, area_id, quoted_price, final_price, completed_at
  ) VALUES
    (v_customer_id, v_priya_id, v_ps_priya, 'confirmed', '2023-10-24T10:00:00+05:30', '123 Fake St', v_area_bandra, 1499, NULL, NULL),
    (v_customer_id, v_ramesh_id, v_ps_ramesh, 'requested', '2023-10-28T09:00:00+05:30', '123 Fake St', v_area_bandra, 499, NULL, NULL),
    (v_customer_id, v_vikram_id, v_ps_vikram, 'confirmed', '2023-11-02T11:00:00+05:30', '123 Fake St', v_area_bandra, 699, NULL, NULL),
    (v_customer_id, v_suresh_id, v_ps_suresh, 'completed', '2023-11-08T14:00:00+05:30', '123 Fake St', v_area_bandra, 349, 349, now());

END $$;
