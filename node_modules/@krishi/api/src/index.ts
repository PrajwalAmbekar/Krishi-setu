import { env } from './config/env.js';

const start = () => {
  console.log(`Server is running on port ${env.PORT} `);
  console.log(`Server is running in ${env.NODE_ENV} mode`);
};
start();
