import { useEffect } from 'react';
import axios from 'axios';

const HealthCheck = () => {
  useEffect(() => {
    const backEndUrl = import.meta.env.VITE_BACKEND_URL;
    const url = `${backEndUrl}/health`;

    axios.get(url)
      .then((response) => {
        console.log('Health Check data:', response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Health Check</h1>
    </div>
  );
};

export default HealthCheck;
