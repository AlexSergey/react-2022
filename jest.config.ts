import type { JestConfigWithTsJest } from 'ts-jest';
import { jsWithTs } from 'ts-jest/presets';

const config: JestConfigWithTsJest = {
  collectCoverageFrom: ['**/*.(t|j)s'],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],

  roots: [
    '<rootDir>/src'
  ],

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts', '<rootDir>/jest.env.ts'],

  testEnvironment: 'jsdom',
  testRegex: '.*\\.spec\\.ts?(x)$',
  transform: {
    ...jsWithTs.transform,
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};

export default config;
