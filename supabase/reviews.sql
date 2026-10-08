create table if not exists public.reviews (
  id text primary key default gen_random_uuid()::text,
  name text not null check (char_length(name) between 1 and 80),
  rating smallint not null check (rating between 1 and 5),
  comment text not null check (char_length(comment) between 10 and 2000),
  created_at timestamptz not null default now(),
  location text not null default 'Bengaluru, Karnataka',
  product text not null default '',
  verified boolean not null default false,
  status text not null default 'approved' check (status in ('approved', 'pending', 'rejected'))
);

create index if not exists reviews_status_created_at_idx
  on public.reviews (status, created_at desc);

alter table public.reviews enable row level security;

grant usage on schema public to service_role;
revoke all on table public.reviews from public, anon, authenticated;
revoke all on table public.reviews from service_role;
grant select on table public.reviews to service_role;