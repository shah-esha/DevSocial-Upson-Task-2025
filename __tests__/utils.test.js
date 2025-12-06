import { greetUser, classifyScore } from "../src/utils.js";

describe("greetUser", () => {
  test("returns normal greeting for regular name", () => {
    expect(greetUser(" Alice ")).toBe("Hello, Alice!");
  });
});

describe("classifyScore", () => {
  test("returns A for scores >= 90", () => {
    expect(classifyScore(95)).toBe("A");
  });
});
