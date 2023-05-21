document.body.style.overflow = 'hidden'; // Das Scrollen wird deaktiviert
document.getElementById('splash-screen').classList.remove('hidden');

setTimeout(function(){
    document.getElementById('splash-screen').classList.add('hidden');
    document.body.style.overflow = ''; // Das Scrollen wird wieder aktiviert
}, 3500);


const lines = document.querySelector(".lines");
const navMenu = document.querySelector(".navmenu");
const html = document.querySelector("html");

lines.addEventListener("click", () => {
    html.classList.toggle('menu-open');
})

document.querySelectorAll(".navlink").forEach(n => n.addEventListener("click", () => {
    html.classList.remove('menu-open');
}))

window.addEventListener("scroll", function(){
    let header = this.document.querySelector("header");

    header.classList.toggle('sticky', window.scrollY > 0);
});


//Job slider

let activeButton = document.querySelector('.job-button.active');

function showText(jobNum) {
  let date = "";
  let list = "";
  let buttonColor = "";
  
  // Aktualisiere die Farbe des aktiven Buttons
  activeButton.classList.remove('active');
  activeButton = document.querySelector(`.job-button:nth-of-type(${jobNum})`);
  activeButton.classList.add('active');
  
  switch (jobNum) {
    case 1:
      date = "September 2021 - Oktober 2021";
      list = "<li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam</li></br><li>et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, </li></br><li>est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, oluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</li></br>";
      break;
    case 2:
      date = "Januar 2021 - Mai 2021";
      list = "<li>sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam</li></br><li>et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, </li></br><li>est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, oluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</li></br>";
      break;
    case 3:
      date = "Juni 2020 - Juli 2020";
      list = "<li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam</li></br><li>et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, </li></br><li>est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, oluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</li></br>";
      break;
    case 4:
      date = "Dezember 2019 - Februar 2020";
      list = "<li>Lorem ipsum dolor sit amet, labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam</li></br><li>et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, </li></br><li>est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, oluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</li></br>";
      break;
    case 5:
      date = "März 2019 - August 2019";
      list = "<li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam</li></br><li>et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, </li></br><li>est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, oluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</li></br>";
      break;
    case 6:
      date = "November 2018 - Januar 2019";
      list = "<li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam</li></br><li>et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, </li></br><li>est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, oluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</li></br>";
      break;
    default:
      date = "Keine Daten vorhanden";
      list = "<li> sed diam voluptua. At vero eos et accusam</li></br><li>et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet, </li></br><li>est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, oluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</li></br>";
  }
  document.getElementById("date").innerHTML = date;
  document.getElementById("list").innerHTML = list;
}

// Anzeige des Texts für den ersten Job, wenn die Seite geladen wird
showText(1); // oder setze die Job-Nummer des standardmäßig ausgewählten Jobs ein

// Füge den Buttons die Event Listener hinzu
const buttons = document.querySelectorAll(".job-button");
buttons.forEach((button, index) => {
button.addEventListener("click", () => {
showText(index + 1);
});
});



//Scroll animations with ScrollReveal

//Mainsite
if (window.matchMedia('(min-width: 850px)').matches) {
  ScrollReveal().reveal('.itemone', { delay: 3600 });
  ScrollReveal().reveal('.itemtwo', { delay: 3800 });
  ScrollReveal().reveal('.itemthree', { delay: 4000 });
  ScrollReveal().reveal('.itemfour', { delay: 4200 });
}

ScrollReveal().reveal('.navlogo', { delay: 4400 });
ScrollReveal().reveal('.mainsite-hi', { delay: 4600 });
ScrollReveal().reveal('.mainsite-name', { delay: 4800 });
ScrollReveal().reveal('.mainsite-make', { delay: 5000 });
ScrollReveal().reveal('.mainsite-about', { delay: 5200 });
ScrollReveal().reveal('.button', { delay: 5400 });
ScrollReveal().reveal('.sidebar', { delay: 5600 });


//Aboutme
ScrollReveal().reveal('.aboutme-title', { delay: 300 });
ScrollReveal().reveal('.aboutme-text', { delay: 500 });
ScrollReveal().reveal('.aboutme-skills', { delay: 700 });
ScrollReveal().reveal('.aboutme-pic', { delay: 700 });

//Experience
ScrollReveal().reveal('.experience-title', { delay: 300 });
ScrollReveal().reveal('.experience-between', { delay: 500 });
ScrollReveal().reveal('.experience-content', { delay: 700 });

//Projects
ScrollReveal().reveal('.project-title', { delay: 300 });
ScrollReveal().reveal('.project-text', { delay: 500 });

//Contact
ScrollReveal().reveal('.contact-title', { delay: 300 });
ScrollReveal().reveal('.contact-text', { delay: 500 });
ScrollReveal().reveal('.contact-button', { delay: 700 });

//Footer
ScrollReveal().reveal('.social-media', { delay: 300 });
ScrollReveal().reveal('.footer', { delay: 500 });

