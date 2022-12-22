let info = {
    "about":"https://www.bvrit.ac.in",
}

function LearnMore(element){
    window.location = info[element];
}

function SwitchMode() {
    document.body.classList.toggle("dark-mode");
}