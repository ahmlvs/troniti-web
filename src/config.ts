// Cabinet URL: the local Vite dev server during `npm run dev`, the production app
// otherwise. Override with PUBLIC_APP_URL in .env when the local cabinet runs on a
// different host/port.
export const APP_URL =
  import.meta.env.PUBLIC_APP_URL ??
  (import.meta.env.DEV ? "http://localhost:5173" : "https://app.troniti.com");
