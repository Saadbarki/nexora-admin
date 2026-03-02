export const API_BASE_URL = '/api/';
export const BASE_URL = '/';
export const WEBSITE_URL =
  import.meta.env.PROD
    ? 'http://cloud.nexoraapp.com/'
    : 'http://localhost:3000/';
export const DOWNLOAD_BASE_URL = '/download/';
export const ACCESS_TOKEN_NAME = 'x-auth-token';
export const FILE_BASE_URL = import.meta.env.VITE_FILE_BASE_URL;
