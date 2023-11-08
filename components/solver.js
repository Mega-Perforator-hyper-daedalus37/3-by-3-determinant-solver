export function solveTheMatrix(column1, column2, column3) {
  const downDiag1 = column1[0] * column2[1] * column3[2];
  const downDiag2 = column2[0] * column3[1] * column1[2];
  const downDiag3 = column3[0] * column1[1] * column2[2];
  const upDiag1 = column1[2] * column2[1] * column3[0];
  const upDiag2 = column2[2] * column3[1] * column1[0];
  const upDiag3 = column3[2] * column1[1] * column2[0];
  return downDiag1 + downDiag2 + downDiag3 - upDiag1 - upDiag2 - upDiag3;
}
export function submitParams() {
  document.getElementById("solver").addEventListener("submit", (data) => {
    data.preventDefault();
    document.getElementById(
      "result"
    ).textContent = `Determinant equal to ${solveTheMatrix(
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
    )}`;
  });
}
