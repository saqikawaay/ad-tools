-- Create table for user profiles


create table user_profiles (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references auth.users(id) not null,
    email text unique not null,
    CONSTRAINT proper_email CHECK (email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    avatar_url text,
    oauth_token text,  -- new column for storing OAuth tokens
    color text,  -- new column for storing preferred colors
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
-- Add row level security to user_profiles table
alter table user_profiles enable row level security;
create policy "all can see" on "public"."user_profiles"
as permissive for select
to public
using (true);

create policy "users can insert" on "public"."user_profiles"
as permissive for insert
to public
with check (auth.uid() = user_id);

create policy "owners can update" on "public"."user_profiles"
as permissive for update
to public
using (auth.uid() = user_id);
with check (auth.uid() = user_id);


-- Google Ads account tables



create table google_ads_accounts (
    google_ads_account_id TEXT PRIMARY KEY,
    account_number text,
    account_name text,
    currency text,
    timezone text,
    -- Include other Google Ads account-related fields as needed
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- user_accessible_accounts table 


create table if not exists user_accessible_accounts ( 
    user_account_id serial primary key,
    user_id uuid not null,
    google_ads_account_id text not null,
    foreign key (user_id) references user_profiles(user_id) on delete cascade,
    foreign key (google_ads_account_id) references google_ads_accounts(google_ads_account_id) on delete cascade,
);


create table if not exists account_alerts (
    alert_id serial primary key,
    user_id uuid not null,
    google_ads_account_id text not null,
    alert_type text not null,
    alert_message text not null,
    alert_status text not null,
    foreign key (user_id) references user_profiles(user_id) on delete cascade,
    foreign key (google_ads_account_id) references google_ads_accounts(google_ads_account_id) on delete cascade,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
