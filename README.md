# vite-plugin-preload

[![npm version](https://badge.fury.io/js/vite-plugin-mock-replace.svg)](https://badge.fury.io/js/vite-plugin-mock-replace)

A Plugin to replace files with mock implementations. Useful for replacing implementations with dummy mocks during testing in vitest, storybook etc

## Installation

```sh
yarn add vite-plugin-mock-replace --dev
```

or

```sh
npm i vite-plugin-mock-replace -D
```

## Usage

Configuration

```javascript
// e.g vitest.config.js
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import mockReplace from "vite-plugin-mock-replace";

export default defineConfig({
  plugins: [react(), mockReplace()],
});
```

## Matching mock files

The default configuration overrides the following files with their override

### Extension based replace

```
src \
  my-file.ts
  my-file.mock.ts
```

### Folder based replace

```
src \
  __mocks__ \
    my-file.ts
  my-file.ts
```
