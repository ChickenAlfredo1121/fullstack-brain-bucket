# fullstack-brain-bucket
> full-stack app deployment practice with Mongo

### authorship + version

`@ChickenAlfredo1121` \| `2026-10-12` \| `HOTEL`

### deployments + codebase
|[main](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket)| [PROD](https://junior.barrycumbie.com/pages/auth.html) | [dev](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/tree/dev) | [DEV](https://fullstack-practice2.onrender.com)| [docs](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/tree/main/docs) | [CI/CD workflow](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/blob/main/.github/workflows/deploy-main-to-gcp.yml) | [successful PROD deployment](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/actions/runs/38272880417)


### HOTEL grading dashboard

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
| HOTEL milestone | [milestone](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/milestone/1) |
| example issue | [issue #](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/issues/6) |
| development branch | [branch](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/tree/dev) |
| feature → dev | [PR #](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/pull/10) |
| dev → main | [PR #](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/pull/11) |
| PROD deployment | [GitHub Action](https://github.com/ChickenAlfredo1121/fullstack-brain-bucket/actions/runs/38272880417) |

### user story

- **As a** burgeoning full-stack developer,
- **I want** a CI/CD infrastructure
- **so that** I can develop locally, manage my code in GitHub, and
    automatically deploy changes to DEV and PROD environments.

### narrative


HOTEL is a continuation of GOLF, a practice exercise using a full-stack deployment process across multiple environments to host a web-based project. The difference is that we are using MonogDB to do practice different HTTP methods. While also deploying custom HTML pages to demonstrate the different HTTP methods.

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

client → fetch() → Express REST API → MongoDB Atlas
```

### stack

`HTML/CSS/JS` \| `Node.js` \| `Express` \| `Git/GitHub` \| `Render` \|
`GCP` \| `Linux` \| `Nginx` \| `PM2` \| `GitHub Actions` \| `MongoDB`

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
│   ├── hotel.html
│   └── index.html
└── server
    ├── app.js
    ├── mongo.js
    ├── package-lock.json
    └── package.json
```

### GCP

external IP: `35.238.228.90`\
Linux user: `havandervort`\
instructor SSH public key installed: `yes`
