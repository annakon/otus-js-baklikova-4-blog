export function initialize (that) {
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
}
