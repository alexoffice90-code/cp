# Booking Planner — Cloudflare Pages + D1

This ZIP is ready for a GitHub → Cloudflare Pages deployment. It has **no wrangler.toml**, no npm, and no build step.

## 1. Create D1
Cloudflare Dashboard → Workers & Pages → D1 → Create database.
Open the database Console and run all of `schema.sql`.

## 2. Upload to GitHub
Put the contents of this ZIP directly in the repository root. Do not put them inside another folder.

## 3. Create Pages project
Workers & Pages → Create → Pages → Connect to Git.
Choose the GitHub repository.
Framework: **None**
Build command: **empty**
Build output directory: **/**
Deploy.

The `functions/` folder is automatically used by Cloudflare Pages Functions.

## 4. Bind D1
Pages project → Settings → Functions → D1 database bindings → Add binding.
**Variable name:** `DB`
**D1 database:** choose the database you created.
Save, then redeploy.

## 5. Use it
Open the Pages URL. Create an account or log in.
Each account has its own planner data stored in D1 and can use the site from different devices.

## Custom domain
Pages project → Custom domains → Add custom domain.

## Included
- Month + week calendar
- Customers/bookings
- CASH / CARD / BANK TRANSFER / KLARNA
- deposits and confirmed status
- weekly/monthly invoice TXT + print/PDF
- planner achievement report
- goal calculator
- settings/categories
- login/register/logout
- separate D1 data per user

No Wrangler is required.
