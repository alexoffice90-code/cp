# Cloudflare Worker + D1 version

Use this version with the Cloudflare **Workers** dashboard.

Repository root:
- `worker.js` — complete Worker, planner UI, login/register, API
- `schema.sql` — run once in D1 Console
- `README-WORKER.md`

No `wrangler.toml` is included.

Cloudflare setup:
1. Import this repository as a Worker.
2. Set the Worker entry point to `worker.js` if Cloudflare asks.
3. Deploy once successfully.
4. Settings → Bindings → Add → D1 database.
5. Variable name: `DB`. Select your D1 database.
6. Run `schema.sql` once in D1 Console.
7. Redeploy.
