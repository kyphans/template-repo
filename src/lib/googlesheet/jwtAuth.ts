import { JWT } from 'google-auth-library';

// API docs: https://theoephraim.github.io/node-google-spreadsheet/#/

const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive.file',
];

export const jwtGGAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: (process.env.GOOGLE_PRIVATE_KEY ?? '').replace(/\\n/g, '\n'),
  scopes: SCOPES,
});

export default jwtGGAuth;