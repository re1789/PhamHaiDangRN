const form = document.querySelector(".container");
const button = form.querySelector(".btn");
let isAnimating = false;
let allowSubmit = false;

form.addEventListener("submit", (event) => {
    if (allowSubmit) return;
    event.preventDefault();

    if (isAnimating) return;
    isAnimating = true;
    button.classList.add("is-filling");

    const submitter = event.submitter || button;
    window.setTimeout(() => {
        button.classList.remove("is-filling");

        window.setTimeout(() => {
            allowSubmit = true;
            form.requestSubmit(submitter);
        }, 500);
    }, 700);
});