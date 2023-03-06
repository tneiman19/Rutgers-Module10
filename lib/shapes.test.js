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

describe("Triangle class", () => {
  it("should return code for a triangle SVG", () => {
    const triangle = new Triangle("Hello World", "red", "blue");
    expect(triangle.render()).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="50,150 150,50 250,150" fill=blue />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">Hel</text></svg>`
    );
  });
});

describe("Circle class", () => {
  it("should return code for a circle SVG", () => {
    const circle = new Circle("Hello World", "red", "blue");
    expect(circle.render()).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill=blue />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">Hel</text></svg>`
    );
  });
});

describe("Square class", () => {
  it("should return code for a square SVG", () => {
    const square = new Square("Hello World", "red", "blue");
    expect(square.render()).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="50" y="50" width="200" height="200" fill=blue />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">Hel</text></svg>`
    );
  });
});
