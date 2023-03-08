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

## Visual Testing Hermione

Storybook integrated with Hermione for Visual Testing.

### Install

Download and install chrome driver:

```shell
https://chromedriver.chromium.org/downloads
```

Install Selenium:

```shell
npm i -g selenium-standalone
selenium-standalone install
```

### Testing

For visual testing you need to run Storybook:

```shell
npm run storybook
```

Run selenium:

```shell
npm run selenium:start
```

For first pass you need to generate reference screenshots:

```shell
npm run hermione:generate
```

After changes, you can run GUI to compare changes for reference screenshots:

```shell
npm run hermione:gui
```
