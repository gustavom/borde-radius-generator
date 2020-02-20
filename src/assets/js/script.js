(function(window, document) {
  "use strict";
  let $box = document.querySelector(".box");
  let $textCssBox = document.querySelector(".text-css");
  let $textCss = document.querySelector(".text-css .text-content");
  let $clipBoardBtn = document.querySelector(".copybtn");
  let $topLeft = document.querySelector(".top-left");
  let $topRight = document.querySelector(".top-right");
  let $bottomLeft = document.querySelector(".bottom-left");
  let $bottomRight = document.querySelector(".bottom-right");
  let topLeftValue = 0;
  let topRightValue = 0;
  let bottomLeftValue = 0;
  let bottomRightValue = 0;

  function setBorderRadius(topLeft, topRight, bottomLeft, bottomRight) {
    $box.setAttribute(
      "style",
      `border-top-left-radius: ${topLeft}px; border-top-right-radius: ${topRight}px; border-bottom-left-radius: ${bottomLeft}px; border-bottom-right-radius: ${bottomRight}px;`
    );
    $textCss.textContent = ` border-top-left-radius: ${topLeft}px;\n border-top-right-radius: ${topRight}px;\r\n border-bottom-left-radius: ${bottomLeft}px;\r\n border-bottom-right-radius: ${bottomRight}px;`;
  }

  function clipText() {
    $textCss.select();
    $textCss.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
  }

  $clipBoardBtn.addEventListener("click", function(e) {
    e.preventDefault();
    clipText();
  });

  $topLeft.addEventListener("keyup", function(e) {
    topLeftValue = e.target.value;
    setBorderRadius(
      topLeftValue,
      topRightValue,
      bottomLeftValue,
      bottomRightValue
    );
  });
  $topRight.addEventListener("keyup", function(e) {
    topRightValue = e.target.value;
    setBorderRadius(
      topLeftValue,
      topRightValue,
      bottomLeftValue,
      bottomRightValue
    );
  });
  $bottomLeft.addEventListener("keyup", function(e) {
    bottomLeftValue = e.target.value;
    setBorderRadius(
      topLeftValue,
      topRightValue,
      bottomLeftValue,
      bottomRightValue
    );
  });
  $bottomRight.addEventListener("keyup", function(e) {
    bottomRightValue = e.target.value;
    setBorderRadius(
      topLeftValue,
      topRightValue,
      bottomLeftValue,
      bottomRightValue
    );
  });
})(window, document);
