# Spellful iOS build status

## Confirmed from uploaded source
- React / TypeScript / Vite website project and server-side Express routes exist.
- `@capacitor/core`, `@capacitor/cli`, `@capacitor/ios` version 8 are already declared in package.json.
- `src/`, `public/`, and substantial media assets are provided.
- The original ZIP **did not include** `codemagic.yaml`, `capacitor.config.ts`, or `ios/`.

## Added in this kit
- Capacitor configuration for bundled assets in `dist/client`.
- Two Codemagic workflows (`ios-test`, `ios-release`), generating the `ios/` folder on Codemagic's Mac.
- App icon reference and script to install it into generated iOS asset catalog.
- Updated npm mobile build and verification scripts.
- App Store listing and privacy draft documents.

## NOT YET VERIFIED / blockers
- iOS compilation (requires macOS/Xcode on Codemagic); no signed IPA created.
- `npm ci`/Vite compilation on a clean CI worker (may need Airo-specific plugins or environment values).
- Native mobile runtime behavior; website endpoints use `/api`, which are not automatically available under bundled Capacitor origins. Add and test native-friendly API routing/CORS/authentication before public release.
- Any production sign-in, payments, social/community, messaging, notifications, storage and account deletion flows.
- Native value and functionality beyond a basic WebView, as required under Apple Review Guideline 4.2.
- Apple Developer signing team, bundle ID ownership, App Store Connect record, privacy disclosures, support page, screenshots.

## Recommended order
1. Upload files and run `ios-test`. Capture build logs.
2. Fix any dependency/Vite/Capacitor compilation errors.
3. Integrate tested API/auth calls for bundled Capacitor iOS and add meaningful native capabilities.
4. Verify on physical iPhone using TestFlight.
5. Add Codemagic App Store Connect integration `spellful_apple`, confirm bundle ID and run `ios-release`.
6. Submit tested, signed IPA via App Store Connect after checklist completion.

**Safety:** Never put Apple API private keys, passwords, `.env` secrets or provisioning profiles into a public GitHub repository.
