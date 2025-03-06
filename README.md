# React Vite Starter

A modern React starter template built with Vite, TypeScript, and best practices.

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Lightning fast build tool
- ⚛️ [React](https://reactjs.org/) - UI library
- 📘 [TypeScript](https://www.typescriptlang.org/) - Type safety
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- 📝 [ESLint](https://eslint.org/) - Code linting
- 💅 [Prettier](https://prettier.io/) - Code formatting
- 🐶 [Husky](https://typicode.github.io/husky/) - Git hooks
- 📋 [Commitlint](https://commitlint.js.org/) - Commit message linting

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- Yarn 1.22.0 or later

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/react-vite-starter.git

# Navigate to project directory
cd react-vite-starter

# Install dependencies
yarn install
```

### Development

```bash
# Start development server
yarn dev
```

### Building for Production

```bash
# Build for production
yarn build

# Preview production build
yarn preview
```

## Project Structure

```
react-vite-starter/
├── src/
│   ├── assets/        # Static assets
│   ├── components/    # React components
│   ├── hooks/         # Custom React hooks
│   ├── layouts/       # Layout components
│   ├── pages/         # Page components
│   ├── services/      # API services
│   ├── store/         # State management
│   ├── styles/        # Global styles
│   ├── types/         # TypeScript types
│   ├── utils/         # Utility functions
│   ├── App.tsx        # Root component
│   └── main.tsx       # Entry point
├── public/            # Public assets
├── .husky/            # Git hooks
├── .vscode/           # VS Code settings
├── index.html         # HTML template
├── package.json       # Dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
├── .eslintrc.js      # ESLint configuration
├── .prettierrc       # Prettier configuration
└── commitlint.config.js # Commit message linting rules
```

## Git Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/) specification. Commit messages should be formatted as follows:

```
type(scope): subject
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `build`: Build system changes
- `ci`: CI configuration changes
- `chore`: Other changes
- `revert`: Reverting changes

### Examples

```bash
feat(auth): add login functionality
fix(api): resolve 500 error in user endpoint
docs(readme): update installation instructions
```

## Code Style

This project uses ESLint and Prettier for code formatting and linting. The configuration is set up to enforce:

- TypeScript best practices
- React best practices
- Airbnb style guide
- Consistent code formatting

## VS Code Setup

The project includes recommended VS Code extensions and settings for the best development experience:

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features

## License

MIT
