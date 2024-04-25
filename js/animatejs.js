import { inView, animate } from "motion";

inView("section", ({ target }) => {
  animate(
    target.querySelector("div"),
    { opacity: 1, transform: "none" },
    { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
  );
});
