function switchImageSrc() {
  let images = document.querySelectorAll("#header img");

  for (let i = 0; i < images.length; i++) {
    let currentSrc = images[i].getAttribute("src");
    let isModified = images[i].getAttribute("data-modified");

    if (window.innerWidth <= 375) {
      if (!isModified || !currentSrc.includes("mobile_375")) {
        let relativePath = currentSrc.split("./assets/images/").pop();
        let newSrc = "./assets/images/mobile_375/" + relativePath;

        images[i].setAttribute("src", newSrc);
        images[i].setAttribute("data-modified", "true");
      }
    } else if (window.innerWidth <= 768) {
      if (!isModified || !currentSrc.includes("mobile_768")) {
        let relativePath = currentSrc.split("./assets/images/").pop();
        let newSrc = "./assets/images/mobile_768/" + relativePath;
        images[i].setAttribute("src", newSrc);
        images[i].setAttribute("data-modified", "true");
      }
    } else {
      if (isModified) {
        let originalSrc = currentSrc.replace(
          "./assets/images/mobile_768/",
          "./assets/images/"
        );
        originalSrc = originalSrc.replace(
          "./assets/images/mobile_375/",
          "./assets/images/"
        );

        images[i].setAttribute("src", originalSrc);
        images[i].removeAttribute("data-modified");
      }
    }
  }
}

window.onload = switchImageSrc;
window.onresize = function () {
  let images = document.querySelectorAll("#header img");
  for (let i = 0; i < images.length; i++) {
    let currentSrc = images[i].getAttribute("src");
    let isModified = images[i].getAttribute("data-modified");

    if (isModified) {
      let originalSrc = currentSrc.replace(
        "./assets/images/mobile_768/",
        "./assets/images/"
      );
      originalSrc = originalSrc.replace(
        "./assets/images/mobile_375/",
        "./assets/images/"
      );

      images[i].setAttribute("src", originalSrc);
      images[i].removeAttribute("data-modified");
    }
  }
  switchImageSrc();
};
