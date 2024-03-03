import { Plugin } from "vite";
import path from "path";
import fs from "fs";
import { MockReplaceOptions, defaultOptions } from "./options";

export default function VitePluginMockReplace(
  options?: Partial<MockReplaceOptions>
): Plugin {
  const mergedOptions = { ...defaultOptions, ...options };

  return {
    name: "vite:vite-plugin-mock-replace",
    enforce: "pre",
    async resolveId(source, importer, options) {
      const resolved = await this.resolve(source, importer, {
        skipSelf: true,
      });
      if (!resolved) {
        return null;
      }

      const fileInfo = path.parse(resolved.id);

      if (mergedOptions.mockExtension) {
        const mockOverrideFile = path.join(
          fileInfo.dir,
          `${fileInfo.name}${mergedOptions.mockExtension}${fileInfo.ext}`
        );

        if (fs.existsSync(mockOverrideFile)) {
          return mockOverrideFile;
        }
      }

      if (mergedOptions.mockFolder) {
        const mockDirectoryFile = path.join(
          fileInfo.dir,
          mergedOptions.mockFolder,
          `${fileInfo.name}${fileInfo.ext}`
        );

        if (fs.existsSync(mockDirectoryFile)) {
          return mockDirectoryFile;
        }
      }
      return null;
    },
  };
}
