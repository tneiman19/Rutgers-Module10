const { ParentShape, Triangle, Circle, Square } = require("./shapes.js");

describe("ParentShape class", () => {
  it("should create a new ParentShape object", () => {
    const parentShape = new ParentShape("Hello World", "red", "blue");
    expect(parentShape.text).toBe("Hel");
    expect(parentShape.textColor).toBe("red");
    expect(parentShape.backgroundColor).toBe("blue");
  });

  it("should trim the text property to 3 chars", () => {
    const parentShape = new ParentShape("Hello World", "red", "blue");
    expect(parentShape.text.length).toBe(3);
  });
});
