# Spellful — GitHub + Codemagic setup

This is the **contents** of your GitHub repository, not a ZIP to commit unchanged.

## Upload

1. Unzip this download in Files on iPhone or a desktop computer.
2. Upload the **contents of the extracted folder** to the root of `spellful777/spellful-ios777`. GitHub does not extract ZIP archives uploaded as files. GitHub's browser file uploader may not preserve nested folder structures on iPhone. In that case use Airo GitHub synchronization or a desktop Git client.
3. In GitHub confirm the root includes `codemagic.yaml`, `capacitor.config.ts`, `package.json`, `src/`, `public/`, `scripts/`, `AppStore/`.
4. In Codemagic choose **Spellful iOS - Unsigned Simulator Test**; the build must be tested before release.

## Limitations

- Apple signing, TestFlight and App Store submission have **not** been performed.
- Live Airo backend services such as `/api/*`, authentication, messaging and payment handling may not function within a bundled Capacitor app; separately integrate and test before publishing.
- npm installation requires Codemagic's internet access. Existing lockfile has two packages missing from its root metadata. CI uses `npm install --package-lock=false` as a temporary workaround. Regenerate a consistent lockfile in a networked environment before a production release.
- `com.spellful.app` is a tentative bundle ID; verify availability in Apple Developer.
- If you require a true one-click transfer into GitHub, the GitHub integration needs Contents: Read & Write permission. The current ChatGPT connection returned HTTP 403 for create-file and create-branch operations.
