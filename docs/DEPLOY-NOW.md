# Deploy the static demonstration now

## 1. Copy this upgrade into the project

Copy the contents of this package into:

```text
C:\EAI-SWIS
```

Do not delete the existing `assets`, `css`, `database`, `electron`, `js`, `server`, `index.html`, `package.json`, or `LICENSE`.

## 2. Commit and push

Open Command Prompt:

```bat
cd /d C:\EAI-SWIS
git status
git add .
git commit -m "docs: add enterprise repository documentation and Pages workflow"
git push
```

## 3. Enable GitHub Pages

Repository → **Settings** → **Pages**

Under **Build and deployment** select:

```text
Source: GitHub Actions
```

The included workflow will deploy the static root after the next push.

## 4. Open the workflow

Repository → **Actions** → **Deploy static demo to GitHub Pages**

A green check means deployment succeeded.

Expected website:

```text
https://etechtelecom-prog.github.io/EAI-SWIS/
```

## 5. Important limitations

GitHub Pages executes only static browser files. It will not run Node.js, Express, Electron, SQLite server operations, or a local API at `127.0.0.1`.

Any browser code using:

```text
http://127.0.0.1:3000
http://localhost:3000
```

must later be configured to use a deployed HTTPS API for remote users.
