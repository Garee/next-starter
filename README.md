# next-starter

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Afterwards, the following was added:

- TypeScript support.
- Environment files.
- Prettier for code formatting.
- SASS support.
- Stylelint for SCSS linting.
- The `classnames` library.
- Convential commit messages.
- `husky` and `lint-staged` to trigger linting before commits.
- A simple example blog application.
- Custom 404 and 500 error pages.

## Getting Started

First, install the dependencies:

```bash
npm run install
```

Next, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Perform static analysis:

```bash
npm run lint
```

Build for production:

```bash
npm run build
```

## Customization Checklist

- [ ] Update the `name` field in `package.json`.
- [ ] Update `<Head>` contents in `layout.tsx`.
- [ ] Update names and colors in `site.webmanifest`.
- [ ] Replace `favicon.ico` etc.
- [ ] Update `.env`.
- [ ] Remove if not needed: `gray-matter`, `remark`, `remark-html`, `date-fns`
- [ ] Replace the contents of `README.md`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
