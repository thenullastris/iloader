<a href="https://iloader.app">
  <picture align="left">
    <source media="(prefers-color-scheme: dark)" srcset="/iloader.svg">
    <img align="left" width="90" height="90" src="/iloader-dark.svg">
  </picture>

  <div id="user-content-toc">
    <ul style="list-style: none;">
      <summary>
        <h1>iloader</h1>
      </summary>
    </ul>
  </div>
</a>

-----

> **⚠️ Personal Fork — Khmer Language Only**
> This is a personal fork of [nab138/iloader](https://github.com/nab138/iloader) maintained by [KhinPhunnadet](https://github.com/thenullastris) for personal use with the Khmer (ភាសាខ្មែរ) language as the sole interface language. For the official app, visit [iloader.app](https://iloader.app).

[![Build iloader](https://img.shields.io/github/actions/workflow/status/nab138/iloader/build.yml?style=flat&logo=github&logoColor=white&label=Build%20iloader)](https://github.com/nab138/iloader/actions/workflows/build.yml)

Install SideStore (or other apps) and import your pairing file with ease — now fully in Khmer.

<img width="1918" height="998" alt="iloader0" src="https://github.com/user-attachments/assets/93cd135d-6d89-46ee-9b9f-12c596806911" />

## របៀបប្រើ (How to use)

- ដំឡើង usbmuxd សម្រាប់ប្រព័ន្ធប្រតិបត្តិការរបស់អ្នក
  - Windows: [iTunes](https://apple.co/ms)
  - macOS: មានរួចហើយ
  - Linux: អាចមានរួចហើយ បើមិនមី សូមដំឡើងតាម package manager
- ទាញយកកំណែចុងក្រោយពី [releases](https://github.com/nab138/iloader/releases)
- ភ្ជាប់ iDevice របស់អ្នកទៅកុំព្យូទ័រ
- បើកកម្មវិធី
- ចូលគណនី Apple ID
- ជ្រើសរើសសកម្មភាព (ឧ. ដំឡើង SideStore)

## លក្ខណៈពិសេស (Features)

- ដំឡើង SideStore (ឬ LiveContainer + SideStore) និងដំណើរការ pairing file ដោយស្វ័យប្រវត្តិ
- នាំចូល IPA ណាមួយ
- ការណែនាំកំហុសសម្រាប់ដោះស្រាយបញ្ហាទូទៅ
- គ្រប់គ្រង pairing file នៅក្នុង StikDebug, SideStore, Protokolle ជាដើម
- មើល និងលុប development certificates និង App IDs

## ការដោះស្រាយបញ្ហា (Troubleshooting)

- ប្រសិនបើមានបញ្ហា សូមចម្លង error message ហើយសួរនៅ [idevice Discord](https://discord.gg/EA6yVgydBz) ឬ [បើក issue](https://github.com/nab138/iloader/issues)
- អ្នកអាចមើល log តាម “View Logs” — ប្រសិនបើគ្មានអ្វីបង្ហាញ សូមប្តូរ log level ទៅ “Debug”
- Log files ត្រូវបានរក្សាទុកនៅ:
  - Windows: `%APPDATA%\me.nabdev.iloader\logs`
  - macOS: `~/Library/Application Support/me.nabdev.iloader/logs`
  - Linux: `~/.local/share/me.nabdev.iloader/logs/`

## ការដំឡើងពី source (Building from source)

1. ដំឡើង [bun](https://bun.sh) (ឬ [Node.js](https://nodejs.org)) និង [Rust](https://www.rust-lang.org/tools/install)
1. Clone repository ហើយ `cd` ចូលទៅ
1. រត់ `bun i` (ឬ `npm i`)

សម្រាប់ development ជាមួយ hot reload: `bun tauri dev` (ឬ `npm run tauri dev`)

Build production: `bun tauri build` (ឬ `npm run tauri build`)

## Credits

- Original app by [nab138](https://github.com/nab138)
- Icon made by [Transistor](https://github.com/transistor-exe)
- UI improved by [StephenDev0](https://github.com/StephenDev0)
- [idevice](https://github.com/jkcoxson/idevice) by [jkcoxson](https://github.com/jkcoxson) for communicating with iOS devices
- [isideload](https://github.com/nab138/isideload) for installing apps
  - A [modified version of apple-platform-rs](https://github.com/nab138/isideload-apple-platform-rs) was used for codesigning
  - [Impactor](https://github.com/khcrysalis/Impactor) was used as a reference for cryptography, codesigning, and provision file parsing
  - [Sideloader](https://github.com/Dadoum/Sideloader) was used as a reference for Apple private developer endpoints
- [idevice_pair](https://github.com/jkcoxson/idevice_pair) was used as a reference for pairing file management
- App made with [tauri](https://tauri.app)

## Khmer Translation

- [KhinPhunnadet](https://github.com/thenullastris): ភាសាខ្មែរ (kh) — Khmer translation & fork maintainer

## License

Copyright (C) 2026 nab138

The source code of this repository is licensed under the MIT License. See the [LICENSE](/LICENSE) file for the full text.

Branding, logos, media assets, and the name “iloader” are not licensed under the MIT License and are subject to separate restrictions. This fork includes a clear link to the official site ([iloader.app](https://iloader.app)) and the [original repository](https://github.com/nab138/iloader) in accordance with the branding license. See [LICENSE-BRANDING](/LICENSE-BRANDING) for full details.
