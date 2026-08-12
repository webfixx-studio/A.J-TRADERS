# A.J TRADERS — TypeScript Migration

The existing public HTML/CSS/UI is preserved. JavaScript application logic has been migrated into TypeScript source under `ts-src/` and compiled browser JavaScript under `js/`.

## Runtime
Browsers load the compiled `.js` files because browsers do not execute TypeScript directly. The `.ts` files are the source of truth for future maintenance.

## Architecture
Admin -> Supabase Auth -> Supabase database/storage -> shared synchronization -> public DOM.

`localStorage` is retained only as a browser cache/compatibility layer; public pages never use it as an authorization source and public pages do not write to Supabase.

## Build
TypeScript 5.8+:

```bash
tsc -p tsconfig.json
```

The public UI/UX was intentionally not redesigned. Admin styling from the repaired version is preserved.

## Required Supabase setup
Run `aj_site_data.sql` in the target Supabase project and create the authorized Auth user:
`ajtraders01052026@gmail.com`

Do not place a Supabase service-role key in the browser.
