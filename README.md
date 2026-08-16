# Booking Planner — Cloudflare Worker + D1

## GitHub structure
Upload the CONTENTS of this folder to the ROOT of your GitHub repository.

Required files:
- worker.js
- wrangler.jsonc
- schema.sql

## D1 setup
1. Create a D1 database in Cloudflare.
2. Copy its Database name and Database ID.
3. Open `wrangler.jsonc`.
4. Replace:
   - `REPLACE_WITH_YOUR_D1_DATABASE_NAME`
   - `REPLACE_WITH_YOUR_D1_DATABASE_ID`
5. Run the SQL from `schema.sql` in the D1 Console.

## Cloudflare deployment
Create/import the Worker from this GitHub repository. The Worker entry point is:
`worker.js`

The D1 binding is declared in `wrangler.jsonc` as:
`DB`

If the dashboard offers a D1 binding editor, it should already be represented by the configuration; you do not need to rely on the Add Binding button.

IMPORTANT:
Do not put passwords, API keys, or secrets in this file.
