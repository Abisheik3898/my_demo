function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function submitForm(event) {
  event.preventDefault();
  document.getElementById("form-msg").textContent = "Thank you! Your message has been sent.";
  setTimeout(() => {
    document.getElementById("form-msg").textContent = "";
  }, 4000);
}

document.addEventListener("DOMContentLoaded", function () {
  new Typed(".typed-text", {
    strings: ["Akash K", "3D Modelling", "CAD Designer", "Manufacturing."],
    typeSpeed: 60,
    backSpeed: 30,
    startDelay: 300,
    backDelay: 2000,        // Hold text on screen longer
    smartBackspace: true,
    loop: true,
  });
});


  // Load theme preference
  const isDark = localStorage.getItem("theme") === "dark";
  if (isDark) {
    document.body.classList.add("dark-mode");
    document.querySelector("#slider i").className = "fa-solid fa-sun";
  }


function toggleTheme() {
  const body = document.body;
  const icon = document.querySelector("#slider i");
  const isDark = body.classList.toggle('dark-mode');
  icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}
