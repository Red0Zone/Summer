document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelectorAll(".check");
  const headerDiv = document.querySelector("header");
  const header = document.querySelector(".drop-down-header");
  const product_popUp = document.querySelector(".product-item-dialog");
  const closeBtn = document.querySelector(".close");
  const wrapper = document.querySelector(".wrapper");
  const replicate = document.querySelector(".product--item");
  const proGrid = document.querySelector(".proList-grid");
  const dots = document.querySelectorAll(".dots>div");
  const sec1_Slider = document.querySelector(".sec1");
  const menuBar = document.getElementById("lottie-nav-bar");
  const navBar = document.querySelector(".headNav");
  const closeMenu = document.querySelector(".nav-bar-close-icon");

  let active = false;
  menuBar.addEventListener("click", (e) => {
    if (active) {
      navBar.classList.remove("active");
      active = false;
      menuBar.getLottie().playSegments([70, 140], true);
    } else {
      navBar.classList.add("active");
      active = true;
      menuBar.getLottie().playSegments([0, 70], true);
    }
  });

  const imageFolder = "images/products/";
  for (let i = 2; i <= 6; i++) {
    let copy = replicate.cloneNode(true);
    let imgSrc = copy.querySelector(".product-item-img-div>img");
    imgSrc.src = imageFolder + `product${i}.png`;
    console.log(imgSrc);
    proGrid.appendChild(copy);
  }

  const headerHeight = headerDiv.clientHeight / 2;
  window.onscroll = () => {
    if (
      document.body.scrollTop > headerHeight ||
      document.documentElement.scrollTop > headerHeight
    ) {
      header.style.border = "solid 1px gray";
      header.style.position = "fixed";
    } else {
      header.style.border = "";
      header.style.position = "";
    }
  };

  list.forEach((check) => {
    check.addEventListener("click", () => {
      removeActiveClasses();
      check.classList.add("active");
    });
  });

  const removeActiveClasses = () => {
    list.forEach((check) => {
      check.classList.remove("active");
    });
  };
  let id = 1;
  const list2 = document.querySelectorAll(".x");
  // for the product popup and the buttons animation::
  list2.forEach((x) => {
    x.addEventListener("click", () => {
      if (x.classList.contains("active")) {
        removeActiveClasses2();
      } else {
        removeActiveClasses2();
        x.classList.add("active");
        let cont = x.closest(".product--item");
        let imgElement = cont.querySelector(".product-item-img-div>img");
        let imgUrl =
          imgElement && imgElement.src ? imgElement.src : "images/2.png";
        let popUpImage = product_popUp.querySelector(
          ".wrapper> .img-container>img"
        );
        popUpImage.src = imgUrl;
        let popUpText = product_popUp.querySelector(".textDiv");
        let productText = cont.querySelector("h2").textContent;
        console.log(productText);
        popUpText.textContent = productText + "_" + x.getAttribute("id-value");
        product_popUp.showModal();
      }
    });
    x.setAttribute("id-value", `${id}`);
    id++;
  });
  product_popUp.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) product_popUp.close();
  });
  closeBtn.addEventListener("click", () => {
    product_popUp.close();
  });

  const removeActiveClasses2 = () => {
    list2.forEach((x) => {
      x.classList.remove("active");
    });
  };
  const list3 = document.querySelectorAll(".GG");

  list3.forEach((GG) => {
    GG.addEventListener("click", () => {
      if (GG.classList.contains("active")) {
        removeActiveClasses3();
      } else {
        removeActiveClasses3();
        GG.classList.add("active");
      }
    });
  });

  const removeActiveClasses3 = () => {
    list3.forEach((GG) => {
      GG.classList.remove("active");
    });
  };

  let dotsId = 1;
  setTime();
  function setTime() {
    id = setInterval(moveInTime, 3500);
  }
  function moveInTime() {
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });
    dotsId = dotsId % 4;
    sec1_Slider.style.backgroundImage = `url("images/background/background${
      dotsId + 1
    }.png")`;

    dots[dotsId].classList.add("active");
    dotsId++;
    clearInterval(id);
    setTime();
  }
});
