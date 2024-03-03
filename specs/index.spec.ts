import { describe, expect, it } from "vitest";
import { getUser } from "./fixtures/getUser";
import { getCompany } from "./fixtures/getCompany";
import { getFoo } from "./fixtures/getFoo";

describe("VitePluginMockReplace", () => {
  it("Should replace with file mocks", () => {
    expect(getUser()).toEqual("Fake user");
  });

  it("Should replace with directory mocks", () => {
    expect(getCompany()).toEqual("Fake company");
  });

  it("Should not replace files without mocks", () => {
    expect(getFoo()).toEqual("Real foo");
  });
});
