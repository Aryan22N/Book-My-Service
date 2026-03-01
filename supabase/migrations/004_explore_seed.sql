-- ============================================================
-- 004_explore_seed.sql
-- Seed script for Explore Page Categories and Base Services
-- Run this in the Supabase SQL Editor
-- ============================================================

-- 1. Insert Service Categories (ON CONFLICT DO UPDATE so it's safe to run multiple times)
INSERT INTO service_categories (slug, name, description, display_order)
VALUES
  ('plumbing', 'Plumbing', 'Pipe repairs, tap replacement, and drain cleaning.', 1),
  ('electrical', 'Electrical', 'Wiring, fixtures, and switch/socket repairs.', 2),
  ('home-cleaning', 'Home Cleaning', 'Deep clean, regular housekeeping.', 3),
  ('carpentry', 'Carpentry', 'Furniture, doors, and woodwork.', 4),
  ('painting', 'Painting', 'Interior and exterior painting services.', 5),
  ('ac-servicing', 'AC Servicing', 'AC installation, cleaning, and repair.', 6),
  ('pest-control', 'Pest Control', 'Cockroaches, termites, and rodents.', 7),
  ('appliance-repair', 'Appliance Repair', 'Washing machine, fridge, and TV repairs.', 8)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, 
    description = EXCLUDED.description, 
    display_order = EXCLUDED.display_order;

-- 2. Insert Base Services for each category to ensure starting prices are correct
DO $$
DECLARE
  v_cat_plumbing uuid;
  v_cat_electrical uuid;
  v_cat_cleaning uuid;
  v_cat_carpentry uuid;
  v_cat_painting uuid;
  v_cat_ac uuid;
  v_cat_pest uuid;
  v_cat_appliance uuid;
BEGIN
  -- Get category IDs
  SELECT id INTO v_cat_plumbing FROM service_categories WHERE slug = 'plumbing';
  SELECT id INTO v_cat_electrical FROM service_categories WHERE slug = 'electrical';
  SELECT id INTO v_cat_cleaning FROM service_categories WHERE slug = 'home-cleaning';
  SELECT id INTO v_cat_carpentry FROM service_categories WHERE slug = 'carpentry';
  SELECT id INTO v_cat_painting FROM service_categories WHERE slug = 'painting';
  SELECT id INTO v_cat_ac FROM service_categories WHERE slug = 'ac-servicing';
  SELECT id INTO v_cat_pest FROM service_categories WHERE slug = 'pest-control';
  SELECT id INTO v_cat_appliance FROM service_categories WHERE slug = 'appliance-repair';

  -- Provide at least one service per category to drive the 'startPrice'
  -- We include the dashboard services here as well so 003_dashboard_seed.sql doesn't fail.

  -- Plumbing
  INSERT INTO services (category_id, name, description, base_price, price_unit, estimated_duration_mins)
  VALUES (v_cat_plumbing, 'Tap Replacement', 'Replace a single tap', 299, 'per_visit', 60)
  ON CONFLICT DO NOTHING;

  INSERT INTO services (category_id, name, description, base_price, price_unit, estimated_duration_mins)
  VALUES (v_cat_plumbing, 'Pipe Repair', 'Kitchen sink leak — Bandra West', 499, 'per_visit', 120)
  ON CONFLICT DO NOTHING;

  -- Electrical
  INSERT INTO services (category_id, name, description, base_price, price_unit, estimated_duration_mins)
  VALUES (v_cat_electrical, 'Fan Installation', 'Ceiling fan mapping and install', 299, 'per_visit', 60)
  ON CONFLICT DO NOTHING;

  INSERT INTO services (category_id, name, description, base_price, price_unit, estimated_duration_mins)
  VALUES (v_cat_electrical, 'Switchboard Repair', 'MCB and socket replacement', 349, 'per_visit', 60)
  ON CONFLICT DO NOTHING;

  -- Home Cleaning
  INSERT INTO services (category_id, name, description, base_price, price_unit, estimated_duration_mins)
  VALUES (v_cat_cleaning, 'Regular Cleaning', 'Daily / weekly housekeeping', 499, 'per_visit', 120)
  ON CONFLICT DO NOTHING;

  INSERT INTO services (category_id, name, description, base_price, price_unit, estimated_duration_mins)
  VALUES (v_cat_cleaning, 'Home Deep Clean', 'Full home deep cleaning — 4h', 1499, 'per_visit', 240)
  ON CONFLICT DO NOTHING;

  -- Carpentry
  INSERT INTO services (category_id, name, description, base_price, price_unit, estimated_duration_mins)
  VALUES (v_cat_carpentry, 'Basic Repair', 'Door hinge repair', 499, 'per_visit', 60)
  ON CONFLICT DO NOTHING;

  -- Painting
  INSERT INTO services (category_id, name, description, base_price, price_unit, estimated_duration_mins)
  VALUES (v_cat_painting, 'Wall Touchup', 'Spot touchups', 999, 'per_visit', 120)
  ON CONFLICT DO NOTHING;

  -- AC Servicing
  INSERT INTO services (category_id, name, description, base_price, price_unit, estimated_duration_mins)
  VALUES (v_cat_ac, 'AC Service', 'AC cleaning and gas refill', 699, 'per_visit', 120)
  ON CONFLICT DO NOTHING;

  -- Pest Control
  INSERT INTO services (category_id, name, description, base_price, price_unit, estimated_duration_mins)
  VALUES (v_cat_pest, 'Cockroach Treat', 'Gel treatment', 799, 'per_visit', 60)
  ON CONFLICT DO NOTHING;

  -- Appliance Repair
  INSERT INTO services (category_id, name, description, base_price, price_unit, estimated_duration_mins)
  VALUES (v_cat_appliance, 'Washing Machine', 'General diagnose', 399, 'per_visit', 60)
  ON CONFLICT DO NOTHING;

END $$;
