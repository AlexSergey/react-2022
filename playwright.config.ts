import { defineConfig } from '@playwright/test';

export default defineConfig({
  outputDir: 'test-results',
  testDir: 'visual-tests/dist',
  webServer: {
    command: 'npm run storybook',
    reuseExistingServer: true,
    url: 'http://localhost:6006',
  },
});
