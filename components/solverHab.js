import { createElement, createInput } from "./createElement.js";
import { solveTheMatrix } from "./solver.js";

export function createSolverHab() {
  const solver = createElement({
    tag: "form",
    elementClass: ["solver"],
    id: "solver",
    parent: document.body,
  });
  for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
    const row = createElement({
      elementClass: ["row"],
      parent: solver,
    });
    for (let index = 0; index < 3; index++) {
      createInput({
        type: "number",
        id: `number${rowIndex * 3 + index + 1}`,
        parent: row,
        name: "params",
        autocomplete: "off",
      });
    }
  }
  const submitButton = createInput({
    type: "submit",
    value: "solve",
    parent: solver,
    id: "submitButton",
  });
  createElement({
    tag: "h2",
    elementClass: ["result"],
    text: `Determinant equal to ${solveTheMatrix(
      [
        document.getElementById("number1").value,
        document.getElementById("number4").value,
        document.getElementById("number7").value,
      ],
      [
        document.getElementById("number2").value,
        document.getElementById("number5").value,
        document.getElementById("number8").value,
      ],
      [
        document.getElementById("number3").value,
        document.getElementById("number6").value,
        document.getElementById("number9").value,
      ]
    )}`,
    id: "result",
    parent: document.body,
  });
  createElement({
    tag: "a",
    text: "How to easily solve them by yourself",
    attribute: [
      {
        attribute: "href",
        value: "https://www.purplemath.com/modules/determs2.htm",
      },
    ],
    parent: document.body,
  });
  return solver, submitButton;
}
