# Contributing to Periodic Table Explorer

Thank you for your interest in contributing to Periodic Table Explorer. This document provides guidelines and instructions for contributing to this repository.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Development Workflow](#development-workflow)
4. [Code Style & Architecture](#code-style--architecture)
5. [Submitting a Pull Request](#submitting-a-pull-request)
6. [Reporting Issues](#reporting-issues)

## Getting Started

To contribute to the project, follow these steps to set up your local development environment:

1. Fork the repository and clone it to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Set up your environment variables. Copy the `.env.example` file to a new file named `.env` and provide your Google Gemini API key:
   ```bash
   REACT_APP_GEMINI_API_KEY=your_google_gemini_api_key_here
   ```
5. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

- `/src/Components`: Contains reusable UI components (e.g., PeriodicTable, SearchBar, Assistant).
- `/src/contexts`: React context providers for global state management (ThemeContext, ElementContext).
- `/src/Data`: Static datasets, such as the comprehensive element configurations (`elementsData.js`).

## Development Workflow

When implementing new features or fixing bugs, please follow a systematic workflow:

1. Create a new branch tailored to your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b bugfix/your-bugfix-name
   ```
2. Make your code changes and test them locally.
3. Ensure that your changes do not introduce any new console errors or break the application build. You can verify the build step by running `npm run build`.
4. Commit your changes using descriptive, imperative commit messages:
   ```bash
   git commit -m "Add responsive layout for element modal"
   ```

## Code Style & Architecture

To maintain consistency across the codebase, adhere to the following standards:

### React Conventions
- Use functional components and React Hooks (`useState`, `useEffect`, `useCallback`, `useContext`) instead of class components.
- Rely on the Context API (`src/contexts`) for sharing state rather than passing deeply nested props.

### CSS and Styling
- The project primarily relies on standard CSS with dynamic CSS variables.
- **Glassmorphism**: We use a glassmorphism design language. Use `var(--glass-bg)`, `var(--glass-border)`, and `var(--glass-blur)` for consistent panel and card aesthetics.
- **Theme Support**: We support both Light and Dark themes. Whenever you introduce new components, avoid hardcoding colors. Instead, utilize the global CSS variables defined in `/src/index.css`.
- **Responsive Design**: Ensure all components are mobile-friendly. Use CSS Grid and Flexbox for fluid layouts.

### Design Guidelines
- **Color Palette**: Use the curated primary (`#8b5cf6`), secondary (`#06b6d4`), and accent (`#f59e0b`) colors from the design tokens.
- **Typography**: Use the 'Inter' font family. Ensure proper weight usage (400 for body, 700+ for headers).
- **Accessibility**: Use semantic HTML (e.g., `<header>`, `<main>`, `<section>`). Provide `aria-label` for interactive elements and ensure color contrast ratios meet WCAG AA standards.
- **Micro-animations**: Use subtle transitions (e.g., `0.3s cubic-bezier(0.4, 0, 0.2, 1)`) for hover states and modal entries to make the app feel alive.

### AI Assistant (Gemini)
- If you modify the Chemistry Assistant behavior, ensure changes align with the strict chemistry-only prompt directives. The assistant must remain an educational tool focused strictly on the periodic table.

## Submitting a Pull Request

When you are ready to propose your changes:

1. Push your branch to your forked repository.
2. Open a Pull Request on the main repository.
3. Provide a clear title and a detailed description of the changes you have implemented.
4. If your pull request addresses an open issue, link the issue in the description.
5. Wait for repository maintainers to review your pull request. You may be asked to make adjustments before the code is merged.

## Reporting Issues

If you find a bug or have a feature request but are unable to implement it yourself, please open an issue instead of a pull request. Include detailed steps to reproduce the bug or comprehensive logic justifying the feature request.
