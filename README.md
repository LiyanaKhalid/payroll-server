# payroll-server

API system for Payroll app built with Node, Express and Postgres.

## Requirements

1. Postgres should be installed and running

## Dev setup

1. Run `npm install` to install dependencies
2. Copy `.env.example` file as `.env` and fill appropriate values

### Create users

`node scripts/addUser.js <username> <password>`

### Running in development

`npm run dev`

### Running in production

`npm run start`
