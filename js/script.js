 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,MotionPathPlugin,TextPlugin,RoughEase,ExpoScaleEase,CustomEase)
  // gsap code here!
 });
 class LoopingElement {
    constructor(element, currentTranslation, speed) {
        this.element = element;
        this.currentTranslation = currentTranslation;
        this.speed = speed;
        this.direction = true;
        this.scrollTop = 0;
        this.metric = 100;

        this.lerp = {
            current: this.currentTranslation,
            target: this.currentTranslation,
            factor: 0.2,
        };

        this.events();
        this.render();
    }

    events() {
        window.addEventListener("scroll", (e) => {
            let direction =
                window.pageYOffset || document.documentElement.scrollTop;
            if (direction > this.scrollTop) {
                this.direction = true;
                this.lerp.target += this.speed * 5;
            } else {
                this.direction = false;
                this.lerp.target -= this.speed * 5;
            }
            this.scrollTop = direction <= 0 ? 0 : direction;
        });
    }

    lerpFunc(current, target, factor) {
        this.lerp.current = current * (1 - factor) + target * factor;
    }

    goForward() {
        this.lerp.target += this.speed;
        if (this.lerp.target > this.metric) {
            this.lerp.current -= this.metric * 2;
            this.lerp.target -= this.metric * 2;
        }
    }

    goBackward() {
        this.lerp.target -= this.speed;
        if (this.lerp.target < -this.metric) {
            this.lerp.current -= -this.metric * 2;
            this.lerp.target -= -this.metric * 2;
        }
    }

    animate() {
        this.direction ? this.goForward() : this.goBackward();
        this.lerpFunc(this.lerp.current, this.lerp.target, this.lerp.factor);

        this.element.style.transform = `translateX(${this.lerp.current}%)`;
    }

    render() {
        this.animate();
        window.requestAnimationFrame(() => this.render());
    }
}

let elements = document.querySelectorAll(".item");

new LoopingElement(elements[0], 0, 0.08);
new LoopingElement(elements[1], -100, 0.08);

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

const hamMenu = document.querySelector(".ham-menu");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

const offScreenMenu = document.querySelector(".off-screen-menu");

open.addEventListener("click", () => {
    hamMenu.classList.toggle("active-nav");
    open.classList.toggle("active");
    close.classList.toggle("active");
});

close.addEventListener("click", () => {
    hamMenu.classList.toggle("active-nav");
    open.classList.toggle("active");
    close.classList.toggle("active");
});
