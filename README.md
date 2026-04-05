# Medical Terpenes Landing Page

This project is a **static Next.js landing page** built with the App Router and Tailwind CSS v4.
It is designed to match the provided desktop and mobile screenshots and can be deployed as a plain
static website.

## What makes it a static page?

The app is configured with:

- `output: "export"` in `next.config.ts`
- `images.unoptimized: true`

That means Next.js does **not** run a server in production for this project. Instead, it pre-renders
the page into static HTML, CSS, and JavaScript files.

When you build the site, Next.js writes the final production output into the `out/` folder.
That folder contains everything a web server needs to serve the page.

## How the page works

1. `src/app/page.tsx` defines the page structure.
2. `src/app/globals.css` defines shared styles and typography rules.
3. `src/app/layout.tsx` applies the root HTML structure and local fonts.
4. `npm run build` generates a static export into `out/`.
5. A server or hosting provider serves the files from `out/`.

## Local development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build the static site

Run the production build:

```bash
npm run build
```

After the build finishes, the generated static site will be in:

```text
out/
```

## How to deploy on a server

Because this project is static, you usually do **not** upload the full Next.js source code to the server.
You upload the generated `out/` folder instead.

### Recommended deployment flow

1. Build the project locally:

```bash
npm install
npm run build
```

2. Upload the contents of `out/` to your hosting server.
3. Configure your web server to serve `index.html` as the entry point.

### Example: Nginx

If you are using Nginx, a simple static config looks like this:

```nginx
server {
  listen 80;
  server_name your-domain.com;

  root /var/www/medical-terpenes/out;
  index index.html;

  location / {
	try_files $uri $uri.html $uri/ /index.html;
  }
}
```

After updating the config, test and reload Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

### DigitalOcean deployment

If you are using DigitalOcean, you have two common options:

#### Option 1: DigitalOcean App Platform

This is the easiest way if you want DigitalOcean to build and host the site for you.

1. Push the project to GitHub.
2. Create a new app in DigitalOcean App Platform.
3. Connect your repository.
4. Set the build command to:

```bash
npm run build
```

5. Set the publish directory to:

```text
out
```

Because this project uses static export, the app platform only needs the generated static files.

#### Option 2: DigitalOcean Droplet with Nginx

Use this option if you want to upload files to your own server.

1. Build the site locally:

```bash
npm install
npm run build
```

2. Copy the contents of the `out/` folder to your Droplet, for example:

```text
/var/www/medical-terpenes
```

3. Configure Nginx to serve the folder.

Example Nginx config:

```nginx
server {
  listen 80;
  server_name your-domain.com;

  root /var/www/medical-terpenes;
  index index.html;

  location / {
    try_files $uri $uri.html $uri/ /index.html;
  }
}
```

4. Test and reload Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

#### Option 3: DigitalOcean Spaces

Use Spaces if you want simple static hosting with optional CDN.

1. Build the site locally.
2. Upload the contents of `out/` to the Space.
3. Enable static website hosting.
4. Point your domain to the Space endpoint.

### cPanel deployment

If you are using cPanel, this project can also be deployed as a static site.

1. Build the project locally:

```bash
npm install
npm run build
```

2. Open your cPanel File Manager or connect by FTP/SFTP.
3. Upload the contents of the `out/` folder into your web root, usually:

```text
public_html/
```

4. Make sure `index.html` is in the root of `public_html`.
5. If your host supports it, configure the domain to serve the uploaded static files.

Notes:

- You do not need to upload the full Next.js source code.
- Only the generated `out/` files are required for static hosting.
- If the site is inside a subfolder, make sure links and asset paths are served from the correct root.

## Do you need to upload the full project?

Usually, **no**.

For this project’s static export setup, the server only needs:

- the generated `out/` folder
- a web server or hosting service to serve those files

You do **not** need:

- `src/`
- `node_modules/`
- `package.json`
- TypeScript source files

You only need the full project on the server if you switch the app to a server-rendered setup
instead of static export.

## If you want a server-rendered app instead

If you remove `output: "export"` from `next.config.ts`, then the app can run in server mode.
In that case you would deploy the full project and run:

```bash
npm run build
npm run start
```

That is a different deployment model from the current static export setup.

## Project structure

- `src/app/page.tsx` — main landing page
- `src/app/layout.tsx` — root layout and local fonts
- `src/app/globals.css` — shared styles, typography, and layout helpers
- `src/app/fonts.ts` — local font definitions
- `next.config.ts` — static export configuration

## Tech stack

- Next.js 16
- React 19
- Tailwind CSS v4
- Local fonts via `next/font/local`

## Useful commands

```bash
npm run lint
npm run dev
npm run build
```
