# Mirza Areeb Baig — Developer Portfolio

A premium, responsive personal portfolio built with **HTML5, CSS3, vanilla JavaScript and Bootstrap 5**. No frameworks, no build step — ready to deploy straight to GitHub Pages.

## File structure

```
portfolio/
│
├── index.html
├── README.md
│
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    ├── images/
    │   └── projects/
<<<<<<< HEAD
    │       ├── CTS_Portfolio_Showcase.png
    │       ├── SalesPilot_AI_Portfolio_Showcase.jpg  (+ salespilot-dashboard/hub/assistant/customers.jpg)
    │       ├── portfolio-showcase.jpg
=======
>>>>>>> aeab3796daba5a2bb548e3634d370f43f6ea17a8
    │       ├── chatmind-showcase.jpg
    │       ├── hermes-showcase.jpg
    │       ├── chatapp-showcase.jpg
    │       ├── weather-showcase.jpg
    │       └── statussaver-showcase.jpg
<<<<<<< HEAD
    ├── certificates/            <- PUT YOUR 5 CERTIFICATE FILES HERE
=======
>>>>>>> aeab3796daba5a2bb548e3634d370f43f6ea17a8
    └── Mirza_Areeb_Baig_Flutter_Developer_CV.pdf
```

## Where things are used

| What | Where it lives | Notes |
|---|---|---|
| Profile / hero content | `index.html`, hero section | No headshot is used — the hero uses a code-editor visual instead |
| Project screenshots | `assets/images/projects/` | Each file is the full screenshot sheet you provided, shown as one image per project |
| CV download | `assets/Mirza_Areeb_Baig_Flutter_Developer_CV.pdf` | Linked from the "Download CV" button with a relative path |
| Todo App visual | Inline CSS in `index.html` / `style.css` | No screenshot was provided, so it uses a styled icon placeholder instead of a fake screenshot |

## How to add your profile picture

The current hero deliberately uses a code-card visual instead of a headshot (matches the "developer-focused" brief). If you'd like to add a photo later:

1. Add your image to `assets/images/` (e.g. `profile.jpg`).
2. In `index.html`, inside `.hero-visual`, add an `<img>` tag or swap it in wherever you'd like it to appear.
3. Style it in `assets/css/style.css` under the hero section.

## How to add or replace project screenshots

1. Drop your image into `assets/images/projects/`.
2. Find the matching `<img src="assets/images/projects/...">` tag in `index.html` (each featured project and "other project" card has one).
3. Update the `src` and `alt` attributes to point at your new file.

## How to replace the CV

1. Replace `assets/Mirza_Areeb_Baig_Flutter_Developer_CV.pdf` with your updated PDF (keep the same filename, or update the `href` on the "Download CV" button in `index.html` if you rename it).

## How to upload to GitHub

1. Create a new repository on GitHub (e.g. `Portfolio`).
2. From inside the `portfolio` folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/AreebBaig26/YOUR-REPO-NAME.git
   git push -u origin main
   ```

## How to enable GitHub Pages

1. Go to your repository on GitHub → **Settings** → **Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` and folder to `/ (root)`.
4. Save. Your site will be live at:
   `https://AreebBaig26.github.io/YOUR-REPO-NAME/`

All paths in this project are relative (`assets/...`, not `/assets/...`), so it will work correctly whether the repo is served from the root or a subpath.

## How to change text

All copy lives directly in `index.html`. Search for the section by its `id` (e.g. `id="about"`, `id="contact"`) or its heading text, and edit the text between the HTML tags directly.

## How to change colors

All colors are defined once, as CSS variables, at the top of `assets/css/style.css`:

```css
:root {
  --bg: #07111F;
  --bg-alt: #0B1728;
  --blue: #2563EB;
  --blue-bright: #3B82F6;
  --cyan: #38BDF8;
  --white: #F8FAFC;
  --text-muted: #94A3B8;
  --border: #1E293B;
  --purple: #A78BFA;
}
```

Change a value here and it updates everywhere it's used across the site.

## How to add another project

**Featured project** (large, alternating layout): copy one of the `<article class="project-feature">` blocks in the "Featured Projects" section of `index.html`, then update the image, label, title, description, feature list, tech badges and links. Duplicate the matching `<div class="modal ...">` block near the bottom of the file for its case study, and update the `data-bs-target` / modal `id` pair so they match.

**Other project** (small card): copy one of the `<div class="mini-project-card">` blocks in the "Other Projects" section and update its content and image.

## Tech used

- HTML5 (semantic sections, meta tags, Open Graph)
- CSS3 (custom properties, Flexbox/Grid, animations, `prefers-reduced-motion` support)
- Vanilla JavaScript (scroll reveal, active nav highlighting, back-to-top, modals via Bootstrap, mailto contact form)
- Bootstrap 5 (layout grid, modal component, responsive utilities) — via CDN
- Bootstrap Icons — via CDN
- Google Fonts: Space Grotesk, Inter, JetBrains Mono

## Notes on the contact form

Since GitHub Pages has no backend, the contact form uses a `mailto:` link — submitting it opens the visitor's email client with the message pre-filled, addressed to `areebbaig26@gmail.com`.
<<<<<<< HEAD


---

## UPDATE NOTES (latest revision)

### What changed
- Projects reordered/updated: 01 CTS, 02 ChatMind AI, 03 Real-Time Chat App, **04 SalesPilot AI**; other projects: Weather App, WhatsApp Status Saver, Portfolio Website. Every project now has a working **View Case Study** modal.
- **Bug fixed:** the CTS "Case Study" button pointed to `#modal-cts`, which did not exist in the HTML. The modal is now created.
- New **Certifications** section (5 cards) with a preview modal; nav link added.
- New Flutter Developer Intern entry (Comstech Solutions, Hyderabad, 2 months) in Experience; new Technical Experience cards (PHP & MySQL, Website Deployment & Hosting).
- Skills reorganised into 9 categories; hero, about, stats (2+ years) and meta tags updated.
- New CV PDF at `assets/Mirza_Areeb_Baig_Flutter_Developer_CV.pdf`.
- Files changed: `index.html`, `assets/css/style.css` (additions appended at the end), `assets/js/script.js` (certificate viewer appended), new images, new `assets/certificates/`.

### Certificates (manual step)
Copy your files into `assets/certificates/` with these exact names (`.jpg`, `.jpeg`, `.png`, `.webp` or `.pdf`):

| File name | Certificate |
|---|---|
| `app-development-certificate-01` | App Development Certificate 01 |
| `app-development-certificate-02` | App Development Certificate 02 |
| `python-development-certificate` | Python Development Certificate |
| `huawei-hcia-datacom-v1-certificate` | HCIA-Datacom V1.0 Course |
| `comstech-flutter-internship-certificate` | Flutter Developer Internship Certificate |

No code change needed: the "View Certificate" button finds the file automatically. Until then visitors see "Certificate preview will be available soon."

### Replacing project screenshots
Replace the image file in `assets/images/projects/` (same name) or edit the `<img src>` in the project card and in its modal (`id="modal-..."`) near the bottom of `index.html`.

### Deploy to GitHub Pages
Commit the contents of this folder to your repo (your live URL is `areebbaig26.github.io/Portfolio/areeb/index.html`, so keep the `areeb/` folder path), push, and wait ~1 minute for Pages to rebuild. All paths are relative.
=======
>>>>>>> aeab3796daba5a2bb548e3634d370f43f6ea17a8
