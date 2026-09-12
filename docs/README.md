# fullstack-brain-bucket
> short app tagline

### authorship + version

`@ChickenAlfredo1121` \| `2026-09-08` \| `GOLF`

### deployments, codebase, & repo features 

  resource                     link
  ---------------------------- ----------------------
  PROD codebase                [`main`](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/tree/main)

> I see that it said GCP, does that mean you want branch or the URL of the VM Instance?

  PROD server                  [GCP](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/tree/main/server)

  DEV codebase                 [`dev`](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/tree/dev)
  DEV server                   [Render](https://fullstack-practice2.onrender.com)
  docs                         [`docs/`](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/tree/main/docs)
  published docs               [GitHub Pages](https://chickenalfredo1121.github.io/fullstack-brain-bucket/)
  CI/CD workflow               [`deploy.yml`](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/blob/main/.github/workflows/deploy-main-to-gcp.yml)
  successful PROD deployment   [GitHub Action](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/actions/runs/34699848553)




  >I couldn't find the instructions on this and think I may be doing this wrong.
  
  resolved GOLF issue          [issue \#](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/tree/iss01)
### user story

> Was this meant to be altered?

- **As a** burgeoning full-stack developer,
- **I want** a CI/CD infrastructure
- **so that** I can develop locally, manage my code in GitHub, and
    automatically deploy changes to DEV and PROD environments.

### narrative

In 2--4 sentences, briefly describe your GOLF infrastructure and what you built/deployed.
GOLF is a development environment used to deploy a website that can be accessed locally and over the cloud. The goal is to be able to make changes and it be able to be seen in a number of ways. This includes the server itself, GitHub pages, Render, and through YAML. The infrastructure is based on a GCP server that uses nginx to publish the website and Render which publishes the project through the repo.


GOLF is a....

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

> Did i overwrite this or is this correct?


``` text
repo/
├── .github/
│   └── workflows/
|     └── deploy-main-to-gcp.yml
├── docs/
│   └── README.md
├── public/
|   └── assets/
|     └── css/
|       └── style.css
|     └── data/
|       └── ideas.json
|     └── js
|       └── admin.js
|       └── auth-guard.js
|       └── auth.js
|       └── content.js
|       └── form.js
|       └── main.js
|   └── config/
|       └── AGENTS.md
|       └── CHARLIE.md
|       └── CLAUDE.md
|   └── docs/
|     └── README.md
|   └── pages/
|       └── admin.html
|       └── auth.html
|       └── content.html
|       └── form.html
|   └── index.html
├── server/
|   └── app.js
|   └── package-lock.json
|   └── package.json
├── .gitignore
└── ...
```

### GCP

external IP: `35.238.228.90`\
Linux user: `havandervort`\
instructor SSH public key installed: `yes`
