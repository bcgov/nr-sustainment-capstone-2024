import { expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import HealthCheck from '../components/HealthCheck';

test('HealthCheck heading', () => {
  render(<HealthCheck />);
  expect(screen.getByRole('heading', { level: 1, name: 'Health Check' })).toBeDefined();
});

test('HealthCheck paragraph stats', async () => {
  render(<HealthCheck />);
  await waitFor(() => {
    expect(
      screen.getByRole('heading', { level: 2, name: 'NMP API is healthy and ready!' }),
    ).toBeDefined();
  });
});
