create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  location text,
  start_at timestamptz not null,
  end_at timestamptz,
  all_day boolean not null default false,
  created_by_user text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists events_start_time_idx on public.events (start_time);

alter table public.events enable row level security;

create policy "public can read events"
on public.events for select
to anon, authenticated
using (true);