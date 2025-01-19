# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
pnpm install
```

### Development

Start the development server with HMR:

```bash
pnpm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
pnpm run build
```

## Deployment

Deployment is done using the Wrangler CLI.

To deploy directly to production:

```sh
pnpm dlx wrangler deploy
```

To deploy a preview URL:

```sh
pnpm dlx wrangler versions upload
```

You can then promote a version to production after verification or roll it out progressively.

```sh
pnpm dlx wrangler versions deploy
```

## Styling

Using [Tailwind CSS](https://tailwindcss.com/) and [shadcn/ui](https://ui.shadcn.com/).

---

Built with ❤️ using React Router.
