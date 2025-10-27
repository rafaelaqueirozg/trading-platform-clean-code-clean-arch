drop schema if exists trading;

create schema trading;

create table
  trading.account (
    account_id uuid primary key,
    name text,
    email text,
    document text,
    password text
  );