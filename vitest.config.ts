import { defineConfig } from "vitest/config";
import mockReplace from ".";
export default defineConfig({
  plugins: [mockReplace()],
});
