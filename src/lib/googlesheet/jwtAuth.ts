import { JWT } from 'google-auth-library';

// API docs: https://theoephraim.github.io/node-google-spreadsheet/#/

const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive.file',
];

const keyGG = process.env.GOOGLE_PRIVATE_KEY ?? '';

export const jwtGGAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: keyGG.replace(/\\n/g, "\n"),
  scopes: SCOPES,
});

export default jwtGGAuth;