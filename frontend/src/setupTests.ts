// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { cleanup } from '@testing-library/react';

import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from './mocks/server';

// Establish API mocking before all -tests.
beforeAll(() => {
  return server.listen();
});

// Reset any request handlers that we may add during the -tests,
// so they don't affect other -tests.
afterEach(() => {
  return server.resetHandlers();
});

// Clean up after the -tests are finished.
afterAll(() => {
  cleanup();
  return server.close();
});
