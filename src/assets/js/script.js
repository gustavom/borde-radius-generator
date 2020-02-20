(function(window, document) {
  "use strict";
  let $box = document.querySelector(".box");
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
  }

  $topLeft.addEventListener("change", function(e) {
    topLeftValue = e.target.value;
    setBorderRadius(
      topLeftValue,
      topRightValue,
      bottomLeftValue,
      bottomRightValue
    );
  });
  $topRight.addEventListener("change", function(e) {
    topRightValue = e.target.value;
    setBorderRadius(
      topLeftValue,
      topRightValue,
      bottomLeftValue,
      bottomRightValue
    );
  });
  $bottomLeft.addEventListener("change", function(e) {
    bottomLeftValue = e.target.value;
    setBorderRadius(
      topLeftValue,
      topRightValue,
      bottomLeftValue,
      bottomRightValue
    );
  });
  $bottomRight.addEventListener("change", function(e) {
    bottomRightValue = e.target.value;
    setBorderRadius(
      topLeftValue,
      topRightValue,
      bottomLeftValue,
      bottomRightValue
    );
  });

  // $bottomRight
})(window, document);
