let isOriginalImage = true;

document
   .getElementById("imageSwitch15")
   .addEventListener("change", function () {
      var img = document.getElementById("iphoneImage15");
      if (isOriginalImage) {
         img.src = "back15.jpeg"; // Switch to the new image
      } else {
         img.src = "iphone 15.png"; // Switch back to the original image
      }
      isOriginalImage = !isOriginalImage; // Toggle the state
   });
