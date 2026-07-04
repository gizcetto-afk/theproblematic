# The Problematic — Website

Independent multidisciplinary design practice, Milan.

## Structure
```
the-problematic/
├── index.html      # Frontispiece / landing (lab)
├── works.html      # Selected works
├── practice.html   # Practice + diagram
├── contact.html    # Contact
├── css/style.css   # All styles
├── js/script.js    # All behavior
└── assets/         # images, icons, logo.svg
```

## Deploy
Static site — no build step.
- **Vercel:** import the repo (or drag this folder into the Vercel dashboard). It serves `index.html` automatically.
- **GitHub:** push this folder as the repo root, then connect it to Vercel.

Every page links CSS/JS via relative paths; no inline CSS or JS.
