const form = document.querySelector(".container");
const button = form.querySelector(".btn");
let Animating = false;
let Submit = false;

form.addEventListener("submit", (event) => {
    if (Submit) return;
    event.preventDefault();

    if (Animating) return;
    Animating = true;
    button.classList.add("is-filling");

    const submitter = event.submitter || button;
    window.setTimeout(() => {
        button.classList.remove("is-filling");

        window.setTimeout(() => {
            Submit = true;
            form.requestSubmit(submitter);
        }, 300);
    }, 700);
});