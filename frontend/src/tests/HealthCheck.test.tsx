import { vi, describe, expect, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import HealthCheck from '../components/HealthCheck';

// Mock the Axios module
vi.mock('axios');

describe('HealthCheck Component', () => {
  it('fetches and displays HealthCheck Component response data', async () => {
    // Mocked data returned by the Axios Get request
    const response = 'NMP API is healthy and ready!';

    // Setup the mock to return the mocked data
    vi.mocked(axios.get).mockResolvedValueOnce({ data: response });

    // Render the component
    render(<HealthCheck />);

    // Wait for the healthcheck data to be fetched and displayed
    await waitFor(() => {
      expect(screen.getByText('NMP API is healthy and ready!')).toBeInTheDocument();
    });
  });
});
