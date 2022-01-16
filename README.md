# Alien Worlds API

API to index and read Alien Worlds data

## Requirements

- Docker

## Configuring

* Edit `config.js`
* Copy `.env.example` to `.env` & configure as needed.

# Running

_Editing files in `src` folder will automatically recompile & reload changes is running services._

`docker compose up`

# Manual Procedures

## Full rebuild

`docker compose build`

# Rebuild Local Dependencies

`docker compose run api yarn`

# Build All Services

`docker compose run api yarn build`

### Fetch ABIs

This must be redone when the ABI changes

`docker compose run api yarn abis`

### Setup Mongo Indexes

`docker compose run api yarn mongo-indexes`

# Maintenance

## Install Git Pre-commit Hooks

`docker compose run api yarn husky`

## Style check

`docker compose run api yarn lint`

## Style auto fix

_Use with caution - not all style errors can be fixed._

`docker compose run api yarn lint-fix`

## Shell

_Please always use `yarn` instead of `npm` to maintain `yarn.lock` file integrity._

`docker compose run api sh`
