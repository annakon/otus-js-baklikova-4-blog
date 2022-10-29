function Sim(sliderId,options) {
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
  Sim.initialize(this);
}

Sim.defaults = {
  // Default options for the slider
  loop: true, // Бесконечное зацикливание слайдера
  auto: true, // Автоматическое пролистывание
  interval: 5000, // Интервал между пролистыванием элементов (мс)
  arrows: true, // Пролистывание стрелками
  dots: true, // Индикаторные точки
};

Sim.prototype.elemPrev = function (num) {
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

Sim.prototype.elemNext = function (num) {
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

Sim.prototype.dotOn = function (num) {
  this.indicatorDotsAll[num].classList.remove("sim-dot-selected");
};

Sim.prototype.dotOff = function (num) {
  this.indicatorDotsAll[num].classList.add("sim-dot-selected");
};

Sim.initialize = function (that) {
  // Constants
  that.elemCount = that.sliderElements.length; // Количество элементов

  // Variables
  that.currentElement = 0;
  let bgTime = getTime();

  // Functions
  function getTime() {
    return new Date().getTime();
  }
  function setAutoScroll() {
    that.autoScroll = setInterval(() => {
      const fnTime = getTime();
      if (fnTime - bgTime + 10 > that.options.interval) {
        bgTime = fnTime;
        that.elemNext();
      }
    }, that.options.interval);
  }

  // Start initialization
  if (that.elemCount <= 1) {
    // Отключить навигацию
    that.options.auto = false;
    that.options.arrows = false;
    that.options.dots = false;
    that.leftArrow.style.display = "none";
    that.rightArrow.style.display = "none";
  }
  if (that.elemCount >= 1) {
    // показать первый элемент
    that.sliderElemFirst.style.opacity = "1";
  }

  if (!that.options.loop) {
    that.leftArrow.style.display = "none"; // отключить левую стрелку
    that.options.auto = false; // отключить автопркрутку
  } else if (that.options.auto) {
    // инициализация автопрокруки
    setAutoScroll();
    // Остановка прокрутки при наведении мыши на элемент
    that.sliderList.addEventListener(
      "mouseenter",
      () => {
        clearInterval(that.autoScroll);
      },
      false
    );
    that.sliderList.addEventListener("mouseleave", setAutoScroll, false);
  }

  if (that.options.arrows) {
    // инициализация стрелок
    that.leftArrow.addEventListener(
      "click",
      () => {
        const fnTime = getTime();
        if (fnTime - bgTime > 1000) {
          bgTime = fnTime;
          that.elemPrev();
        }
      },
      false
    );
    that.rightArrow.addEventListener(
      "click",
      () => {
        const fnTime = getTime();
        if (fnTime - bgTime > 1000) {
          bgTime = fnTime;
          that.elemNext();
        }
      },
      false
    );
  } else {
    that.leftArrow.style.display = "none";
    that.rightArrow.style.display = "none";
  }

  if (that.options.dots) {
    // инициализация индикаторных точек
    let sum = "";
    let diffNum;
    for (let i = 0; i < that.elemCount; i++) {
      sum += '<span class="sim-dot"></span>';
    }
    that.indicatorDots.innerHTML = sum;
    that.indicatorDotsAll = that.sliderRoot.querySelectorAll("span.sim-dot");
    // Назначаем точкам обработчик события 'click'
    for (let n = 0; n < that.elemCount; n++) {
      that.indicatorDotsAll[n].addEventListener(
        "click",
        () => {
          diffNum = Math.abs(n - that.currentElement);
          if (n < that.currentElement) {
            bgTime = getTime();
            that.elemPrev(diffNum);
          } else if (n > that.currentElement) {
            bgTime = getTime();
            that.elemNext(diffNum);
          }
          // Если n == that.currentElement ничего не делаем
        },
        false
      );
    }
    that.dotOff(0); // точка[0] выключена, остальные включены
    for (let i = 1; i < that.elemCount; i++) {
      that.dotOn(i);
    }
  }
};

module.exports = Sim;
