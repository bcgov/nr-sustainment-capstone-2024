import { render, screen, waitFor } from '@testing-library/react';
// imports toBeInTheDocument
import '@testing-library/jest-dom';
import { vi, describe, it, expect } from 'vitest';
import axios from 'axios';
import FetchDevelopers from '../components/FetchDevelopers';

vi.mock('axios');
describe('FetchDevelopers component', () => {
  it('fetches and displays developers data', async () => {
    // Mocked data returned by the Axios GET request
    const developers = [
      { id: 1, first_name: 'G', last_name: 'Damaso' },
      { id: 2, first_name: 'K', last_name: 'Caparas' },
      { id: 3, first_name: 'S', last_name: 'Spy' },
    ];
    // Setup the mock to return the mocked data
    vi.mocked(axios.get).mockResolvedValueOnce({ data: developers });
    render(<FetchDevelopers />);
    // Wait for the developers data to be fetched and displayed
    await waitFor(() => {
      // Check if the correct number of developer rows are displayed
      const rows = screen.getAllByRole('row');
      expect(rows).toHaveLength(developers.length + 1);
      developers.forEach((developer) => {
        expect(screen.getByText(developer.first_name)).toBeInTheDocument();
        expect(screen.getByText(developer.last_name)).toBeInTheDocument();
      });
    });
  });
});
