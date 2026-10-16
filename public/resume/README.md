# Resume download

The resume is **not committed to this repository**. It lives as an asset on a
GitHub release, and every **Download Resume** button (header, hero, mobile menu)
reads one value — `profile.resumeUrl` in `src/data/site.js`:

```
https://github.com/dangi-vikas/my-portfolio/releases/latest/download/Vikas-Dangi-Resume.pdf
                   └── always the newest published release ──┘        └─ asset name ─┘
```

## One-time setup

1. Push this repository to GitHub if you haven't already.
2. On GitHub open **Releases → Draft a new release**.
3. Tag: `resume` (or `v1.0.0` — anything you like). Target: `master`.
4. Attach `Vikas-Dangi-Resume.pdf` under "Attach binaries by dropping them here".
5. **Publish release.**

Don't leave it as a draft and don't tick "pre-release": `releases/latest` skips
both, and the button would 404. The button works the moment it is published.

## Updating the resume later

No new release needed. Open that same release, **delete the old asset**, and
upload the new PDF **with the same name** (`Vikas-Dangi-Resume.pdf`). The URL is
unchanged, so the next click downloads the new file — no rebuild, no redeploy and
no commit.

Publishing a fresh release each time works too, as long as the asset name stays
identical and the release is the newest *published* one.

## Why a release asset

GitHub answers with

```
Content-Disposition: attachment; filename=Vikas-Dangi-Resume.pdf
```

so the browser saves the file under the right name instead of opening a preview
tab, and the PDF stays out of the repository's browsable file tree.

## Renaming the asset

The asset name and the URL must match. If you upload it under a different name,
update `resumeUrl` in `src/data/site.js` to match, for example
`` `${resumeRelease}/My-Name-Resume.pdf` ``.

## Alternatives

- **Serve it from your own domain:** commit the PDF as
  `public/resume/Vikas-Dangi-Resume.pdf` and set `resumeUrl: resumePath` in
  `src/data/site.js`. Netlify then publishes `/resume/Vikas-Dangi-Resume.pdf`, but
  every update needs a deploy.
- **Raw file in a repository:** point `resumeUrl` at
  `https://raw.githubusercontent.com/<owner>/<repo>/<branch>/<path>.pdf`. That
  serves the newest commit immediately, but the PDF is browsable in the repo tree.
