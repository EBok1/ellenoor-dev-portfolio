# Ellenoor Dev Portfolio

A modern developer portfolio built with Next.js 14, TypeScript, and Tailwind CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Tech Stack

- **Framework:** Next.js 16 (App Router) with Turbopack
- **Language:** TypeScript 5.7
- **UI Library:** React 19
- **Styling:** Tailwind CSS 3.4
- **Font:** Inter (Google Fonts)
- **Code Formatting:** Prettier with Tailwind CSS plugin
- **Linting:** ESLint 9

## Code Formatting

This project uses Prettier for code formatting. Format on save is enabled by default in VS Code.

### Available Scripts

```bash
# Format all files
npm run format

# Check if files are formatted correctly
npm run format:check

# Run ESLint
npm run lint
```

### VS Code Setup

The project includes VS Code settings for automatic formatting on save. Make sure you have the following extensions installed:

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

VS Code will suggest these extensions when you open the project.

## Project Structure

```
ellenoor-dev-portfolio/
├── .vscode/
│   ├── settings.json    # VS Code settings (format on save)
│   └── extensions.json  # Recommended extensions
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # Reusable React components
├── public/              # Static files
├── .prettierrc          # Prettier configuration
├── .prettierignore      # Prettier ignore rules
├── .eslintrc.json       # ESLint configuration
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── tailwind.config.ts   # Tailwind config
├── postcss.config.mjs   # PostCSS config
└── next.config.mjs      # Next.js config
```

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

