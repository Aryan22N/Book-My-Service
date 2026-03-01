-- ============================================================
-- LANDING PAGE SHOWCASE TABLES
-- Run in Supabase SQL Editor
-- These tables store curated display data for the landing page,
-- independent of the auth-gated bookings/profiles tables.
-- ============================================================

-- ------------------------------------------------------------
-- featured_projects  (landing page "Real Results" section)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS featured_projects (
  id            uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  title         text        NOT NULL,
  subtitle      text,
  badge         text        NOT NULL,          -- "After" | "In Progress" | "Before"
  image_url     text        NOT NULL,
  budget        text,                          -- display string e.g. "₹12k – ₹18k"
  location      text,                          -- city/area string
  sort_order    integer     NOT NULL DEFAULT 0,
  is_active     boolean     NOT NULL DEFAULT true,
  created_at    timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE featured_projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "featured_projects: public read"
  ON featured_projects FOR SELECT
  USING (is_active = true);

-- ------------------------------------------------------------
-- featured_professionals  (landing page "Top Rated" section)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS featured_professionals (
  id            uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  name          text        NOT NULL,
  role          text        NOT NULL,         -- e.g. "Cleaning Specialist"
  avatar_url    text        NOT NULL,
  avg_rating    numeric(3,2) NOT NULL CHECK (avg_rating BETWEEN 0 AND 5),
  rate          text        NOT NULL,         -- display string e.g. "₹500/hr"
  tags          text[]      NOT NULL DEFAULT '{}',
  sort_order    integer     NOT NULL DEFAULT 0,
  is_active     boolean     NOT NULL DEFAULT true,
  created_at    timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE featured_professionals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "featured_professionals: public read"
  ON featured_professionals FOR SELECT
  USING (is_active = true);

-- ------------------------------------------------------------
-- SEED DATA
-- ------------------------------------------------------------

INSERT INTO featured_projects (title, subtitle, badge, image_url, budget, location, sort_order)
VALUES
  (
    'Modern Kitchen Deep Clean',
    'Completed by Priya Sharma • 4 hours duration',
    'After',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBPLu8VIs47av9Gx4evGABFTweZvFe7zCJhhnriuvguGXgwl3npAub-T5C5kJZ198sClYGvaIP_SOi6q-k5D2ipMuIfBhJKhpXoCkUqGKGHmDL3N3VXgVzsKRC6Xxf-iPX6uOwX5vUbvj_zgvplkZBJ1cfYHst10tAnyNMyYPdK19WKiK3Axw7kaZ70HvgSV2R0yKJ6-ZiHa-M7YR5KVBxB1s6b877cm2aVk18MNxUU9ONph4xWYrnmj70iJf3bP5fRiAQZi0MJrn0m',
    '₹1,499',
    'Koramangala, Bangalore',
    1
  ),
  (
    'Full Electrical Panel Upgrade',
    'Led by Suresh Electricals • 1 day remaining',
    'In Progress',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCf6iiH3WJPYzR10i_z3qc9YaLUDJHqAg5aENnTMRhLjvCvWYbsS32rLEvYjqGD0T6NU0vmjM1xOR0bMuRoNhbGsuRcD_x41Mm3o3Hu0Feyr8Ba3E-VDI4r_gKbGXdIi3TYj36w8uFQwV9Sxale7Awz59dgpxnPtq675L5PfLRxQg7SYHOXtmxhmpVV8d_pbmIEM1TtmxlOgrq24MHHw6Blc6wq7kvBhIMGzpFjwbrGYl2W-hJ1w6LUQRdm29l7ArpH2oz7ldlokYd4',
    '₹4,500 – ₹6,000',
    'Bandra West, Mumbai',
    2
  );

INSERT INTO featured_professionals (name, role, avatar_url, avg_rating, rate, tags, sort_order)
VALUES
  (
    'Priya Sharma',
    'Home Cleaning Expert',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCo7zTdhVacNbfmMq-fmN87mdYrMTJJH26m2XRmwYWQoYMbIHh995sTKPjM6-SrmJ4DfYXjSvdWCBwVxh84T0PJbeUoWHUakPSCjm1BAosqtZcngHgx1BTMJfk_wZ9SzCLPZjlUhvwL3yBZrN8pYu0vON_yJnXR3we6JDO72akWguxCOKgzVrynp_WrTTBfchYwcPu8caKQZIG2G8b87BOgNkpv23X9BybAqqKyP_rClsfTaM8fRbCLK-acwARKVix7yAhGtxZb_OC2',
    4.9,
    '₹499/visit',
    ARRAY['Deep Clean', 'Eco-Friendly'],
    1
  ),
  (
    'Suresh Electricals',
    'Master Electrician',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAsbn4peuVIHghpQMsFGROHzxM9kFCYXnWxDIXeoSvgd3Ow3SlUc033G78hxLDECC4KJwb7sEbgTmo5_T-JAcsEkXrYr2AnrWb5wsKLWzOkR6JLqv9cpvMuQf0o0xxWL2BZZAmyMp0Cz3HA74csplPqanJ0llydZZuFZOE7m0pOdVvMG7VUfu2AjM9F9cK1Coo0Ld9W-MAHMVkW8sOJDuJo-bAB2kDZP1SUyPSJ9w4Pa9Wjypgk2lRvm_B6-2kENTA5f7hWghrWdy2A',
    5.0,
    '₹349/visit',
    ARRAY['Switchboard', 'Fan Install'],
    2
  ),
  (\r\n    'Ramesh Patel',
    'Plumbing Expert',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBPLu8VIs47av9Gx4evGABFTweZvFe7zCJhhnriuvguGXgwl3npAub-T5C5kJZ198sClYGvaIP_SOi6q-k5D2ipMuIfBhJKhpXoCkUqGKGHmDL3N3VXgVzsKRC6Xxf-iPX6uOwX5vUbvj_zgvplkZBJ1cfYHst10tAnyNMyYPdK19WKiK3Axw7kaZ70HvgSV2R0yKJ6-ZiHa-M7YR5KVBxB1s6b877cm2aVk18MNxUU9ONph4xWYrnmj70iJf3bP5fRiAQZi0MJrn0m',
    4.8,
    '₹499/visit',
    ARRAY['Pipe Repair', 'Drain Clean'],
    3
  );

-- ------------------------------------------------------------
-- booking_time_slots  (checkout page time picker)
-- Platform-level available booking hours shown to customers.
-- In production, provider_availability would filter these further.
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS booking_time_slots (
  id           uuid    PRIMARY KEY DEFAULT gen_random_uuid(),
  slot_id      text    NOT NULL UNIQUE,   -- e.g. "09am" — stable key for UI
  label        text    NOT NULL,          -- e.g. "09:00 AM"
  time_value   time    NOT NULL,          -- actual TIME for bookings.scheduled_at
  is_default   boolean NOT NULL DEFAULT false,
  is_active    boolean NOT NULL DEFAULT true,
  sort_order   integer NOT NULL DEFAULT 0
);

ALTER TABLE booking_time_slots ENABLE ROW LEVEL SECURITY;

CREATE POLICY "booking_time_slots: public read"
  ON booking_time_slots FOR SELECT
  USING (is_active = true);

INSERT INTO booking_time_slots (slot_id, label, time_value, is_default, sort_order)
VALUES
  ('09am',   '09:00 AM', '09:00:00', false, 1),
  ('10am',   '10:00 AM', '10:00:00', true,  2),
  ('11am',   '11:00 AM', '11:00:00', false, 3),
  ('01pm',   '01:00 PM', '13:00:00', false, 4),
  ('0230pm', '02:30 PM', '14:30:00', false, 5),
  ('04pm',   '04:00 PM', '16:00:00', false, 6);
