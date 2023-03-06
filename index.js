const {
  ParentShape,
  Triangle,
  Circle,
  Square,
} = require("../Rutgers-Module10/lib/shapes");
const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "text",
    message:
      "Enter 3 Letters to display in your SVG image. (Only the first three letters will be displayed)",
  },
  {
    type: "input",
    name: "textColor",
    message:
      "Enter a color for the text. (You may enter a color or a hexadecimal number)",
  },
  {
    type: "rawlist",
    name: "shape",
    message: "Select a shape",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "backgroundColor",
    message:
      "Enter a color for the shape background. (You may enter a color or a hexadecimal number)",
  },
];

function init() {
  inquirer.prompt(questions).then((answers) => {
    const SVGCode = getClassRender(answers);
    //console.log(answers);
    //console.log(SVGCode);
    createFile("logo.svg", SVGCode);
  });
}

init();

function getClassRender(answers) {
  const { shape, text, textColor, backgroundColor } = answers;

  let result;

  switch (shape) {
    case "Circle":
      result = new Circle(text, textColor, backgroundColor).render();
      break;
    case "Triangle":
      result = new Triangle(text, textColor, backgroundColor).render();
      break;
    case "Square":
      result = new Square(text, textColor, backgroundColor).render();
      break;
    default:
      throw new Error("Invalid shape");
  }

  return result;
}

function createFile(filename, data) {
  fs.writeFile(filename, data, (err) => {
    err
      ? console.log("Something went wrong", err)
      : console.log("Generated logo.svg");
  });
}
