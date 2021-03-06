# next-starter

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

After bootstrapping, the following was added:

- [TypeScript](https://www.typescriptlang.org/) support for modern ECMAScript features.
- The files `.env.{development,production}` to set environment variables.
- [Prettier](https://prettier.io/) for code formatting.
- [SCSS](https://sass-lang.com/) support for modern CSS features.
- [Stylelint](https://stylelint.io/) for linting `.scss` files.cla
- The [`classnames`](https://github.com/JedWatson/classnames) library to conditionally join `className` values.
- [`commitlint`](https://commitlint.js.org/#/) to enforce [conventional commit](https://www.conventionalcommits.org) messages.
- [`husky`](https://typicode.github.io/husky/#/) and [`lint-staged`](https://github.com/okonet/lint-staged) to automatically trigger linting before commits.
- A simple example blog application.
- Custom `404` and `500` error pages.
- A [development container](https://code.visualstudio.com/docs/remote/create-dev-container).
- Progress Web App support using [`next-pwa`](https://github.com/shadowwalker/next-pwa).
- [Jest](https://jestjs.io/) and [react-testing-library](https://github.com/testing-library/react-testing-library) for testing.
- [Netlify CMS](https://www.netlifycms.org/) for content management.
- [Travis CI](https://travis-ci.com) configuration.

## Getting Started

First, clone and install the dependencies:

```bash
npx @garyblackwood/next-starter my-app
cd my-app
npm run install
```

Next, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To start the CMS server:

```bash
npm run cms-server
```

To perform static analysis:

```bash
npm run lint
```

To run tests:

```bash
npm test
```

To build for production:

```bash
npm run build
```

## Customisation Checklist

Run through this checklist to customise the application for your needs:

- [ ] Update the `name`, `description`, `homepage`, `repository`, `keywords` and `bugs` fields in `package.json`.
- [ ] Update site metadata within the `<Head>` component in `components/layout.tsx`.
- [ ] Update the application configuration in `lib/config.ts`.
- [ ] Update `name`, `short_name`, `theme_color` and `background_color` in `public/site.webmanifest`.
- [ ] Replace `public/favicon.ico` and `public/icon.png` etc.
- [ ] Update the environment variables in `.env.{development,production}`.
- [ ] Remove unnecessary dependencies from `package.json` e.g. `gray-matter`, `remark`, `remark-html`, `date-fns`
- [ ] Change the license in `package.json` and `LICENSE` if needed.
- [ ] Update the CMS configuration in `public/admin/config.yml`.
- [ ] Update the contents of this file.
- [ ] Start working on your application!

## Directory Overview

| Directory     | Description                                     |
| ------------- | ----------------------------------------------- |
| \_\_tests\_\_ | The Jest unit tests.                            |
| .devcontainer | The development docker container configuration. |
| .husky        | The git hooks scripts.                          |
| components    | The app's reusable components.                  |
| lib           | The app's service-like code.                    |
| package       | Contains the package installation script.       |
| pages         | The app's page components.                      |
| posts         | The markdown files for each example blog post.  |
| public        | Services static content from the root /.        |
| styles        | The app's CSS.                                  |

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
