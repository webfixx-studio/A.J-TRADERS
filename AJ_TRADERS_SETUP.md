# A.J TRADERS — Production Fix Setup

## What was changed
- Public UI/UX and visual design were preserved.
- Admin panel received a restrained professional UI refresh only.
- Global Admin → Supabase → Public-site synchronization was rebuilt around a single shared bridge.
- Public pages are read-only against Supabase; only the authenticated admin can write site content.
- Phone, email, address, WhatsApp, logo, CEO name/bio/photo, hero images, product images, stats, FAQ, gallery, clients, blog, services, certificates/quality and YouTube are synchronized globally.
- YouTube parsing is centralized and supports watch, youtu.be, shorts, embed, live and extra query parameters.
- Leads are stored in Supabase; anonymous visitors can submit but cannot read/delete other leads.
- Images use Supabase Storage URLs instead of database/localStorage Base64 as the authoritative format.
- Fixed timer-based content races were removed; shared refresh is triggered after the Supabase pull completes.
- Static embedded logos were moved to local assets to reduce repeated page payload size.
- The old client-side `AJ@2025` password gate was removed.

## Required Supabase setup
1. Open the Supabase SQL Editor for project `bijohvnrjwcgwpypebcd`.
2. Run **`aj_site_data.sql`** from this package.
3. In Supabase Authentication → Users, create/confirm the admin account:
   - Email: `ajtraders01052026@gmail.com`
   - Password: choose a strong password (8+ characters).
4. Open `admin.html` and sign in with that Auth account.
5. Do NOT put a Supabase `service_role` key in the website. The public publishable/anon key is intended to be browser-visible; the SQL policies are the security boundary.

## If the admin email is different
Change the email in BOTH:
- `aj-shared-sync.js` → `ADMIN_EMAIL`
- `aj_site_data.sql` → every `auth.jwt() ->> 'email'` comparison

Then run the SQL again.

## Important
The package cannot be truthfully called live-tested against the production Supabase project from this environment because no authenticated live browser session was available here. The code was statically checked, cross-file scanned, JavaScript syntax checked, local asset references checked, duplicate IDs checked, and the security/data-flow invariants were verified against the supplied forensic findings.
