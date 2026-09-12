# fullstack-brain-bucket
> short app tagline

### authorship + version

`@ChickenAlfredo1121` \| `2026-09-08` \| `GOLF`

### deployments, codebase, & repo features 

  resource                     link
  ---------------------------- ----------------------
  PROD codebase                [`main`](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/tree/main)
  PROD server                  [GCP]([URL](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/tree/main/server))
  DEV codebase                 [`dev`](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/tree/dev)
  DEV server                   [Render](https://fullstack-practice2.onrender.com)
  docs                         [`docs/`](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/tree/main/docs)
  published docs               [GitHub Pages](https://chickenalfredo1121.github.io/fullstack-brain-bucket/)
  CI/CD workflow               [`deploy.yml`](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/blob/main/.github/workflows/deploy-main-to-gcp.yml)
  successful PROD deployment   [GitHub Action](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/actions/runs/34699848553)
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

external IP: `35.238.228.90`\
Linux user: `havandervort`\
instructor SSH public key installed: `yes`
