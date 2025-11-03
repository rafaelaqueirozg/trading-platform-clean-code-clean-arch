drop schema if exists trading;

create schema trading;

create table trading.account (
  account_id uuid primary key,
  name text,
  email text,
  document text,
  password text
);

create table trading.account_asset (
	account_id uuid,
	asset_id text,
	quantity numeric,
	primary key (account_id, asset_id)
);