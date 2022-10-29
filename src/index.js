import "../scss/styles.scss";
import * as Sim from "./sim-slider";

document.addEventListener("DOMContentLoaded", () => {
  new Sim("slider1",{
    loop: true, // Бесконечное зацикливание слайдера
    auto: true, // Автоматическое пролистывание
    interval: 5000, // Интервал между пролистыванием элементов (мс)
    arrows: true, // Пролистывание стрелками
    dots: true, // Индикаторные точки
  });
});
