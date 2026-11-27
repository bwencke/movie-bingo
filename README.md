# Movie Bingo

Holiday Movie Bingo — a static site backed by Supabase.

## Structure

- `index.html` — the bingo page
- `js/supabase-config.js` — Supabase project URL and anon/publishable key
- `js/supabase-client.js` — creates `window.supabaseClient` via supabase-js (loaded from CDN)
- `supabase/` — Supabase CLI project (`config.jsonc`, migrations, functions)

## Run locally

Serve the folder on port 3000 (matches `auth.site_url` in `supabase/config.jsonc`):

```sh
python3 -m http.server 3000
```

### Local Supabase (optional)

Requires the [Supabase CLI](https://supabase.com/docs/guides/local-development/cli/getting-started) and Docker.

```sh
supabase start
```

Copy the API URL and publishable/anon key it prints into `js/supabase-config.js`.

### Hosted project

```sh
supabase login
supabase link --project-ref <project-ref>
supabase db push
```

Put the project URL and anon key from Project Settings > API into `js/supabase-config.js`.

## Deploy (GitHub Pages)

`.github/workflows/deploy-pages.yml` publishes the repo root to GitHub Pages on every push to `main`.
One-time setup: in the repo's Settings > Pages, set **Source** to **GitHub Actions**.
If you use Supabase Auth, add the Pages URL to the allowed redirect URLs in your Supabase project.
