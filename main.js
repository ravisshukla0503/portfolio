window.addEventListener('load', function() {
    let loadingIcon = document.getElementById('loading-icon');
    let container = document.getElementsByClassName('container');

    setTimeout(function() {
      loadingIcon.style.display = 'none'; // Hide the loading icon
      container.style.opacity = "1";
    }, 2000); // Show the loading icon for 3 seconds (adjust as needed)
  });

function isViewport(element) {
    const view = element.getBoundingClientRect();
    return (
        view.top >= 0 &&
        view.left >= 0 &&   
        view.bottom <= ( window.innerHeight || document.documentElement.clientHeight) &&
        view.right <= ( window.innerWidth || document.documentElement.clientWidth)
    )
}

function lazyLoad() {
    lazyImages = document.querySelectorAll(".lazy");
    console.log("lazyimage means scroll start" ,lazyImages)
    lazyImages.forEach((image) => {
        if(isViewport(image)) {
            image.setAttribute('src', image.getAttribute('lazy-src'));
        }
    })
}  

window.addEventListener('scroll', lazyLoad);
let animatedNoOne = document.getElementById("animated-no-1");
let animatedNoTwo = document.getElementById("animated-no-2");

// counter on no of project done

let countProject = 0;
let timerforproject = setTimeout( function settime() {
    if(countProject<=10){
        animatedNoOne.innerHTML = `${countProject}+`
        countProject++;
    } else {
        clearTimeout();
    }
    timerforproject = setTimeout(settime, 550)
}, 0);


// counter on no dsa question solved

let countDSA =0;
let timerfordsa = setTimeout( function settime() {
    if(countDSA<=182){
        animatedNoTwo.innerHTML = `${countDSA}+`
        countDSA++;
    } else {
        clearTimeout();
    }
    timerfordsa = setTimeout(settime, 25)
}, 0);

// toddle functionality
let disable = true;

function toddle() {
    const tddle = document.getElementById("burger-icon");
    console.log(disable)
    if(disable) {
        if(tddle.classList[1]=='toddle-disable-style'){
            tddle.classList.remove('toddle-disable-style')
        }
        tddle.classList.add('toddle-style');
        disable = false;
    } else {
        if(tddle.classList[1]=='toddle-style'){
            tddle.classList.remove('toddle-style')
        }
        tddle.classList.add('toddle-disable-style');
        disable= true;
    }
}

const upwardIcon = document.getElementById("upward-icon");

function handleScroll() {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition > 300) {
    upwardIcon.classList.add("visible");
    upwardIcon.classList.remove("hidden");
  } else {
    upwardIcon.classList.add("hidden");
    upwardIcon.classList.remove("visible");
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

window.addEventListener("scroll", handleScroll);

upwardIcon.addEventListener("click", scrollToTop);
