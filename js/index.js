// جزء الريلود اللي فالصفحه

window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("loader").style.opacity = ".12";
    setTimeout(function () {
      document.getElementById("loader").style.display = "none";

      const content = document.getElementById("content");
      content.style.opacity = "1";
      content.style.transform = "scale(1)";
    }, 500);
  }, 250);
});
