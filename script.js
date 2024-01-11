// Counter number

const countNum = document.querySelectorAll(".counter-numbers");

const speed = 100;

countNum.forEach((e) => { 
  const updateNumber = () => {
    const targetNumber = parseInt(e.dataset.number);
    const num = parseInt(e.innerText);
    const incrementNumber = Math.trunc(targetNumber / speed);
    if (num < targetNumber) {
      e.innerText = `${num + incrementNumber}`;
      setTimeout(updateNumber, 20);
    }
  };
  updateNumber();
});



let tablinks = document.getElementsByClassName("tab-links");
let main = document.getElementsByClassName("tab-contents");

function opentab(tabname) {

  // for the only tab
    for (barLoop of tablinks) {
        barLoop.classList.remove("active-links");
    }
// this is main content
    for (loop2 of main) {
        loop2.classList.remove("active-tabs");
    }

     //barLoop - tap
    event.currentTarget.classList.add("active-links");
    // just remove main element
    document.getElementById(tabname).classList.add("active-tabs");
}

// 

function clickBar() {
  const sideBar = document.querySelector(".sidebar");
  sideBar.style.display = "flex";
}

function hideSideBar() {
  const sideBar = document.querySelector(".sidebar");
  sideBar.style.display = "none";
}
