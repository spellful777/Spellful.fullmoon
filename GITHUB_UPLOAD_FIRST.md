# Spellful: GitHub upload from an iPhone

This is a complete copy of the **uploaded Spellful 6.zip** with the Codemagic / Capacitor files added. Its top-level project folder is `Spellful/`. The repository root on GitHub must contain `package.json`, `codemagic.yaml`, `capacitor.config.ts`, `src/`, `public/`, and `scripts/` — not a nested `Spellful/` directory.

## Easiest if your Spellful web code is already in GitHub
Upload the *small companion archive* `Spellful_GitHub_Configuration_ONLY.zip` contents, replacing files with the same names. It includes `codemagic.yaml`, `capacitor.config.ts`, the modified `package.json`, `scripts/`, and `AppStore/`. This is far easier than reuploading hundreds of existing media files.

## On your iPhone
1. Save and unzip the companion archive in Files.
2. Go to https://github.com/spellful777/spellful-ios777 (main branch).
3. Use Add file > Upload files to add the extracted file contents. GitHub mobile upload may not preserve nested folder layouts reliably. If it does not, use GitHub Codespaces in a browser or sync from Airo instead.
4. In GitHub confirm `codemagic.yaml` has many lines, not 0 lines, and sits beside `package.json` at repository root.
5. In Codemagic refresh configuration files; choose `Spellful iOS - Unsigned Simulator Test` first.

## Important
The previous YAML for the separate `SpellfulApp.swift` prototype is not suitable for this Capacitor source. Do not use that XcodeGen workflow. This upload does not modify your live site until your deployment service processes GitHub changes; confirm Airo sync settings.

Apple signing credentials belong only in **Codemagic secrets/integrations**, never in GitHub files.
