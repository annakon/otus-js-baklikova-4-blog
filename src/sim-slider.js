import { initialize } from "./init";

export class Sim {
  constructor(sliderId, options) {
    const id = document.getElementById(sliderId);
    if (id) {
      this.sliderRoot = id;
    } else {
      this.sliderRoot = document.querySelector(".sim-slider");
    }

    // Slider objects
    this.sliderList = this.sliderRoot.querySelector(".sim-slider-list");
    this.sliderElements = this.sliderList.querySelectorAll(".sim-slider-element");
    this.sliderElemFirst = this.sliderList.querySelector(".sim-slider-element");
    this.leftArrow = this.sliderRoot.querySelector("div.sim-slider-arrow-left");
    this.rightArrow = this.sliderRoot.querySelector("div.sim-slider-arrow-right");
    this.indicatorDots = this.sliderRoot.querySelector("div.sim-slider-dots");

    // Initialization
    if (options) {
      this.options = options;
    } else {
      this.options = Sim.defaults;
    }
    initialize(this);
  }

  defaults = {
    // Default options for the slider
    loop: true, // Бесконечное зацикливание слайдера
    auto: true, // Автоматическое пролистывание
    interval: 5000, // Интервал между пролистыванием элементов (мс)
    arrows: true, // Пролистывание стрелками
    dots: true, // Индикаторные точки
  };

  elemPrev (num) {
    num = num || 1;

    const prevElement = this.currentElement;
    this.currentElement -= num;
    if (this.currentElement < 0) this.currentElement = this.elemCount - 1;

    if (!this.options.loop) {
      if (this.currentElement === 0) {
        this.leftArrow.style.display = "none";
      }
      this.rightArrow.style.display = "block";
    }

    this.sliderElements[this.currentElement].style.opacity = "1";
    this.sliderElements[prevElement].style.opacity = "0";

    if (this.options.dots) {
      this.dotOn(prevElement);
      this.dotOff(this.currentElement);
    }
  };

   elemNext  (num) {
    num = num || 1;

    const prevElement = this.currentElement;
    this.currentElement += num;
    if (this.currentElement >= this.elemCount) this.currentElement = 0;

    if (!this.options.loop) {
      if (this.currentElement === this.elemCount - 1) {
        this.rightArrow.style.display = "none";
      }
      this.leftArrow.style.display = "block";
    }

    this.sliderElements[this.currentElement].style.opacity = "1";
    this.sliderElements[prevElement].style.opacity = "0";

    if (this.options.dots) {
      this.dotOn(prevElement);
      this.dotOff(this.currentElement);
    }
  };

   dotOn = function (num) {
    this.indicatorDotsAll[num].classList.remove("sim-dot-selected");
  };

  dotOff = function (num) {
    this.indicatorDotsAll[num].classList.add("sim-dot-selected");
  };
}
