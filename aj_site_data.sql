-- A.J TRADERS shared admin content table
-- Run this once in Supabase SQL Editor.
create table if not exists public.aj_site_data (
  id text primary key,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.aj_site_data enable row level security;

-- Public website needs to READ the current published content.
create policy "A J TRADERS public read"
on public.aj_site_data for select
using (true);

-- IMPORTANT: For a real production admin, protect writes with Supabase Auth/RLS.
-- This temporary policy allows the existing admin panel's anon client to write.
-- Replace it with an authenticated-admin policy before production use.
create policy "A J TRADERS admin write"
on public.aj_site_data for insert
with check (true);

create policy "A J TRADERS admin update"
on public.aj_site_data for update
using (true)
with check (true);
