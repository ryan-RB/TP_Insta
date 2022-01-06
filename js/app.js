document.addEventListener("DOMContentLoaded", () => {
    console.log("app.js chargé.");
    let warning = document.querySelector(".alert");
    let email = document.querySelector(".mail");
    let mdp = document.querySelector(".password");
    let btn = document.getElementById("connexion");

    
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        formActive();
   
    });

    let formActive = () => {

        email = document.getElementsByTagName("input")[0].value;
        mdp = document.getElementsByTagName("input")[1].value;

        if (email && mdp) {
            warning.classList.add("success");
            warning.classList.remove("error");
            warning.innerText = "Connexion réussie";
            localStorage.setItem("utilisateur", email);
            sessionStorage.setItem("utilisateur", "idsession");
            document.location.assign("home.html");

        } else if (!mdp) {
            warning.classList.add("error");
            warning.innerText = "Mail invalide";
            warning.classList.remove("success");
        } else if (!email) {
            warning.classList.add("error");
            warning.innerText = "Mot de passe invalide";
            warning.classList.remove("success");
        } else {
            warning.classList.add("error");
            warning.innerText = "Mail ou mot de passe incorrecte";
            warning.classList.remove("success");
        }
    };
});