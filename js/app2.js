document.addEventListener("DOMContentLoaded", () => {
    console.log("app2.js chargé.");
    let submit_log = localStorage.getItem("utilisateur");
    let el = document.querySelector(".hi");
    let el2 = document.querySelector(".hi-2");
    el.innerText += ` ${submit_log}`;
    el.style.color = "green";
    el2.innerText += ` ${submit_log}`;
});