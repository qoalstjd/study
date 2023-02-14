import { useState, useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  return { ref: element, style: { opacity: 0 } };
};

function FadeInUse() {
  const fadeInH1 = useFadeIn(2, 0);
  const fadeInP = useFadeIn(3, 1);
  return (
    <div>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eius quo, quae non minima
        adipisci natus quas! Distinctio soluta eaque deserunt itaque natus mollitia blanditiis
        ducimus culpa reprehenderit aperiam error expedita iste corporis id adipisci voluptas, sit
        corrupti labore dolor rerum minima dolores. Tempora, rem quasi. Itaque saepe quo voluptatum?
      </p>
    </div>
  );
}

export default FadeInUse;
