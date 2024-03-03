export interface MockReplaceOptions {
  /**
   * @default '__mocks__'
   */
  mockFolder?: string;
  /**
   * @default '.mock'
   */
  mockExtension?: string;
}

export const defaultOptions: MockReplaceOptions = {
  mockFolder: "__mocks__",
  mockExtension: ".mock",
};
