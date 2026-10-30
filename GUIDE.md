# Deployment Guide and Cloud Computing Explanation

## Part A: Put your website online (no terminal needed)

**1. Download and unzip.** Download `haripriya-portfolio.zip`, right-click it and choose Extract All (Windows) or double-click it (Mac).

**2. Open in VS Code.** Install VS Code from code.visualstudio.com. Open it, click File > Open Folder and select the extracted `haripriya-portfolio` folder.

**3. Add your GitHub and LinkedIn links.** In VS Code open `src/data.js`. Find `github: ''` and `linkedin: ''`. Paste your profile URLs between the quotes, for example `github: 'https://github.com/yourname'`. Save with Ctrl+S. Buttons for them appear automatically.

**4. Run it on your computer (optional).** Install Node.js (LTS) from nodejs.org. In VS Code click Terminal > New Terminal, type `npm install` and press Enter (this downloads the libraries). Then type `npm run dev` and press Enter. Open the address it prints (usually http://localhost:5173). Press Ctrl+C in the terminal to stop.

**5. Create a GitHub account.** Go to github.com, click Sign up and follow the steps.

**6. Upload to GitHub from VS Code.**
- Click the Source Control icon on the left (a branch symbol).
- Click "Publish to GitHub" (or Initialize Repository first, then Publish).
- Sign in to GitHub when asked and allow access.
- Pick "Publish to GitHub public repository", keep the name `haripriya-portfolio`, tick all files and confirm.
- If asked for a commit message, type "first version" and click Commit.

**7. Create a Vercel account.** Go to vercel.com, click Sign Up, choose Hobby (free plan), then Continue with GitHub.

**8. Import the repository.** On the Vercel dashboard click Add New > Project. Find `haripriya-portfolio` under Import Git Repository and click Import. Vercel detects Vite automatically; leave every setting unchanged.

**9. Deploy.** Click Deploy and wait about a minute.

**10. Get your public URL.** When confetti appears, click Continue to Dashboard. Your link looks like `https://haripriya-portfolio.vercel.app`. Click Visit to open it and share this link for your assignment.

**11. Update later.** Edit files in VS Code and save. In Source Control type a message such as "updated skills", click Commit, then Sync Changes (or Push). Vercel redeploys automatically in about a minute and the same URL shows the new version.

## Part B: Explanation for your evaluation

**Cloud computing** means using computing resources (servers, storage, networking) over the internet from a provider, instead of owning and maintaining your own hardware. You pay for or get what you use and can scale easily.

**Website hosting** means storing your website files on a server that is always connected to the internet, so anyone can open the site at any time.

**Vercel** is a cloud platform that hosts websites. It builds your code and serves it from servers around the world. It is an example of PaaS (Platform as a Service).

**GitHub** is a cloud service that stores code and keeps its full version history. It lets Vercel read your project.

**Deployment** means taking code from your computer and making it live for the public. For this project it includes building the React code into plain HTML, CSS and JavaScript files.

**How my site is hosted:** My code is stored in a GitHub repository. Vercel is connected to it, builds the project with `npm run build`, and places the output files on its cloud servers and content delivery network (CDN).

**Workflow:**
1. I write and save code on my computer.
2. I push it to GitHub.
3. GitHub tells Vercel something changed.
4. Vercel builds and deploys it automatically (this is a simple CI/CD pipeline).
5. The site is live at the same public URL.

**What happens when someone opens my URL:**
1. The browser asks DNS for the address of the website.
2. The request goes to the nearest Vercel server.
3. Vercel sends the HTML, CSS and JavaScript files.
4. The browser runs them and shows the page. No database or backend is involved.

**Why Vercel:** it is free for personal projects, needs no server setup, connects directly to GitHub, deploys automatically, provides HTTPS and a public URL, and supports Vite and React out of the box.

**Free (Hobby) plan limitations:** it is meant for personal, non-commercial use; it has monthly limits on bandwidth and build time; it offers limited team features and support; the URL ends in `.vercel.app` unless you buy a custom domain; and usage above the limits can pause the site. Check vercel.com/pricing for current numbers.

## Architecture diagram

```
Local Website Code (VS Code)
        |  push / sync
        v
GitHub Repository  (code storage and version history)
        |  automatic trigger
        v
Vercel  (build: npm run build)
        |
        v
Cloud Deployment  (files on global servers / CDN)
        |
        v
Public Website URL  (https://your-name.vercel.app)
        |
        v
User's Browser  (loads HTML, CSS, JS and shows the site)
```
