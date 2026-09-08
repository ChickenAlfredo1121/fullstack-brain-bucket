# APP NAME
> short app tagline

### authorship + version

`@ChickenAlfredo1121` \| `2026-09-08` \| `GOLF`

### deployments, codebase, & repo features 

  resource                     link
  ---------------------------- ----------------------
  PROD codebase                [`main`](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/tree/main)
  PROD server                  [GCP](URL)
  DEV codebase                 [`dev`](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/tree/dev)
  DEV server                   [Render](https://fullstack-practice2.onrender.com)
  docs                         [`docs/`](URL)
  published docs               [GitHub Pages](URL)
  CI/CD workflow               [`deploy.yml`](URL)
  successful PROD deployment   [GitHub Action](URL)
  resolved GOLF issue          [issue \#](URL)

### user story

- **As a** burgeoning full-stack developer,
- **I want** a CI/CD infrastructure
- **so that** I can develop locally, manage my code in GitHub, and
    automatically deploy changes to DEV and PROD environments.

### narrative

In 2--4 sentences, briefly describe your GOLF infrastructure and whatyou built/deployed.


### architecture

``` text
LOCAL
  │
  ▼
GitHub
  │
  ├── dev  ──► Render ─────────► DEV
  │
  └── main ──► GitHub Actions ─► GCP ──► PROD
```

### stack

`HTML/CSS/JS` \| `Node.js` \| `Express` \| `Git/GitHub` \| `Render` \|
`GCP` \| `Linux` \| `Nginx` \| `PM2` \| `Certbot` \| `GitHub Actions`

### project structure

Use `tree` to show your actual project structure.

``` text
repo/
├── .github/
│   └── workflows/
├── docs/
│   └── README.md
├── public/
├── server/
├── .gitignore
└── ...
```

### GCP

external IP: `00.00.00.00`\
Linux user: `username`\
instructor SSH public key installed: `yes`
