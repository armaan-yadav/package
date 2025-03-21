# React TypeScript Tailwind Starter Template

A modern, lightweight starter template for React projects using TypeScript and Tailwind CSS. This template provides a solid foundation to jumpstart your front-end development with best practices and optimized configurations.

[Template Link](https://github.com/armaan-yadav/react-ts-tail-shadkit-template)

## Features

- ⚡️ **React** - A JavaScript library for building user interfaces
- 🔷 **TypeScript** - Static type checking for JavaScript
- 🎨 **Tailwind CSS** - A utility-first CSS framework
- 🗂 **Redux Toolkit** - State management made easy
- 🧩 **ShadCN** - Beautifully designed UI components
- ⚡ **Vite** - Lightning-fast build tool
- 📦 **Optimized build setup** - Efficient production builds

## Getting Started

### Prerequisites

- Node.js (version 14.x or higher recommended)
- npm or yarn

### Installation

1. Run the following command:

   ```bash
   npm install -g create-react-jaldi my-app-name
   ```

2. And it's done! Start Coding

## Project Structure

```
my-app/
├── public/            # Static files
├── src/               # Source files
│   ├── _root/         # Root-level components or utilities
│   ├── components/    # Reusable UI components
│   ├── config/        # Configuration files
│   ├── constants/     # Application-wide constants
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Shared libraries and utilities
│   ├── redux/         # Redux store configuration
│   ├── services/      # API services and business logic
│   ├── types/         # TypeScript type definitions
│   ├── App.tsx        # Main App component
│   ├── index.css      # Global CSS styles
│   ├── main.tsx       # Entry point
│   └── vite-env.d.ts  # Vite environment definitions
├── .eslintrc.js       # ESLint configuration
├── tsconfig.json      # TypeScript configuration
├── tailwind.config.js # Tailwind CSS configuration
├── vite.config.ts     # Vite configuration
└── postcss.config.js  # PostCSS configuration
```

## Customization

### Tailwind Configuration

Customize the `tailwind.config.js` file to adjust colors, typography, spacing, and more.

### Adding Dependencies

```bash
npm install package-name
```

## Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the project for production
- `npm run preview` - Previews the production build
- `npm run lint` - Lints the codebase
- `npm run format` - Formats code with Prettier

## Building for Production

```bash
npm run build
```

This will generate optimized production files in the `dist` directory.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
