# Cloudflare Worker + D1 version

This version is for the Cloudflare **Workers** interface shown in the screenshot.

## GitHub
Upload these files to the repository root:
- `worker.js`
- `schema.sql`
- `README-WORKER.md`

## Cloudflare
Create/import a Worker from the repository. Set the Worker entry point to `worker.js` if the dashboard asks for it. No wrangler config file is included.

After the Worker has a successful deployment, go to **Settings → Bindings → Add → D1 database** and set:
- Variable name: `DB`
- D1 database: your database

Run `schema.sql` once in the D1 Console.

The Worker serves the complete planner UI from `worker.js`, and `/api/*` routes use the D1 binding.
