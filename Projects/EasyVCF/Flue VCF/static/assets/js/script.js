
const button_reset = document.getElementById("btn-reset");

button_reset.addEventListener("click", (event) => {
    document.getElementById("form_main").reset();
});

(() => {
    if ('serviceWorker' in navigator){
        window.addEventListener("load", () => {
            navigator.serviceWorker.register("sw.js")
            .then((register) => {
                console.log("Registered");
            });
        });
    } else {
        alert("No serviceWorker support in this browser");
    }
});
