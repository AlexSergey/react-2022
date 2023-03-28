# Overview

React Boilerplate focus on best practices from linting, building and testing.

Includes:

- ESLint
- Prettier
- Stylelint
- Lint Staged, Husky, Commitlint
- Jest + Testing Tools
- TypeScript
- Postcss + Tailwind
- Storybook
- SCSS Modules
- Playwright

## Visual Testing Playwright

After installation project need to run the command to install playwright:

```shell
npx playwright install
```

At the first start, you need to generate reference screenshots using the command:

```shell
npm run visual-tests:generate
```

Reference screenshots will be placed in the "visual-tests/dist" folder in the project. This folder should be pushed to the git repo.
The folder "test-results" should be in gitignore. This folder re-generated every run playwright and include diff screenshots with errors.

The command for a run playwright to compare the current component with screenshot

```shell
npm run visual-tests
```
