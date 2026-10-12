# fullstack-brain-bucket
> full-stack app deployment practice with Mongo

### authorship + version

`@ChickenAlfredo1121` \| `2026-10-12` \| `HOTEL`

### deployments, codebase, & repo features 

| requirement | evidence |
|---|---|
| MongoDB connection | [server code](URL) |
| GET all | [endpoint code](URL) |
| GET one | [endpoint code](URL) |
| filtered GET | [endpoint code](URL) |
| POST / create | [endpoint code](URL) |
| PATCH / update | [endpoint code](URL) |
| DELETE | [endpoint code](URL) |
| frontend `fetch()` | [client code](URL) |
| persistent CRUD | [PROD app](URL) |
| HOTEL milestone | [milestone](URL) |
| example issue | [issue #](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/issues/6) |
| development branch | [branch](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/tree/dev) |
| feature → dev | [PR #](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/pull/8) |
| dev → main | [PR #](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/pull/9) |
| PROD deployment | [GitHub Action](URL) |

### user story

- **As a** burgeoning full-stack developer,
- **I want** a CI/CD infrastructure
- **so that** I can develop locally, manage my code in GitHub, and
    automatically deploy changes to DEV and PROD environments.

### narrative


GOLF is a practice exercise using a full-stack deployment process across multiple environments to host a web-based project. The codebase has two branches that provide the automation used by the environments. The dev branch deploys to Render, and main deploys to the GCP VM through GitHub Actions.

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


``` text
fullstack-brain-bucket
├── docs
│   └── README.md
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── style.css
│   │   ├── data
│   │   │   └── ideas.json
│   │   └── js
│   │       ├── admin.js
│   │       ├── auth-guard.js
│   │       ├── auth.js
│   │       ├── content.js
│   │       ├── form.js
│   │       └── main.js
│   ├── config
│   │   ├── AGENTS.md
│   │   ├── CHARLIE.md
│   │   └── CLAUDE.md
│   ├── docs
│   │   └── README.md
│   ├── index.html
│   └── pages
│       ├── admin.html
│       ├── auth.html
│       ├── content.html
│       └── form.html
└── server
    ├── app.js
    ├── package-lock.json
    └── package.json
```

### GCP

external IP: `35.238.228.90`\
Linux user: `havandervort`\
instructor SSH public key installed: `yes`
