-- A.J TRADERS FINAL GLOBAL DATABASE SETUP
-- Safe to run in Supabase SQL Editor. Does not delete website content.

create table if not exists public.aj_site_data (
  id text primary key,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.aj_site_data enable row level security;

drop policy if exists "A J TRADERS public read" on public.aj_site_data;
drop policy if exists "A J TRADERS admin write" on public.aj_site_data;
drop policy if exists "A J TRADERS admin update" on public.aj_site_data;

grant select, insert, update on public.aj_site_data to anon, authenticated;

create policy "A J TRADERS public read"
on public.aj_site_data for select
using (true);

create policy "A J TRADERS admin write"
on public.aj_site_data for insert
with check (true);

create policy "A J TRADERS admin update"
on public.aj_site_data for update
using (true)
with check (true);

create table if not exists public.aj_leads (
  id bigint primary key,
  name text,
  mobile text,
  email text,
  message text,
  date text,
  source text,
  created_at timestamptz not null default now()
);

alter table public.aj_leads enable row level security;
grant insert, select, update, delete on public.aj_leads to anon, authenticated;

drop policy if exists "A J TRADERS leads insert" on public.aj_leads;
drop policy if exists "A J TRADERS leads read" on public.aj_leads;
drop policy if exists "A J TRADERS leads update" on public.aj_leads;
drop policy if exists "A J TRADERS leads delete" on public.aj_leads;

create policy "A J TRADERS leads insert" on public.aj_leads for insert with check (true);
create policy "A J TRADERS leads read" on public.aj_leads for select using (true);
create policy "A J TRADERS leads update" on public.aj_leads for update using (true) with check (true);
create policy "A J TRADERS leads delete" on public.aj_leads for delete using (true);
