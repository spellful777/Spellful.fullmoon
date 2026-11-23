import type { CapacitorConfig } from '@capacitor/cli';

// Bundled assets: the production app DOES NOT load the live website using server.url.
// The React application currently relies on /api routes for some features.
// Those routes require a tested production backend integration before submission.
const config: CapacitorConfig = {
  appId: 'com.spellful.app', // Confirm this exact ID is available in your Apple Developer account.
  appName: 'Spellful',
  webDir: 'dist/client',
  ios: {
    contentInset: 'automatic',
    backgroundColor: '#0D0B1A',
  },
};

export default config;
