const tabs = document.querySelectorAll(".tabs li");

const img = document.querySelector(".planet-img");
const name = document.querySelector(".planet-name");
const desc = document.querySelector(".planet-desc");
const distance = document.querySelector(".planet-distance");
const time = document.querySelector(".planet-time");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const planet = tab.getAttribute("data-planet");

    img.classList.add("fade");
    name.classList.add("fade");
    desc.classList.add("fade");

    setTimeout(() => {


    if (planet === "moon") {
      img.src = "./starter-code/assets/destination/image-moon.png";
      name.textContent = "MOON";
      desc.textContent = "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
      distance.textContent = "384,400 KM";
      time.textContent = "3 DAYS";
    }

    if (planet === "mars") {
      img.src = "./starter-code/assets/destination/image-mars.png";
      name.textContent = "MARS";
      desc.textContent = "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!";
      distance.textContent = "225 MIL. KM";
      time.textContent = "9 MONTHS";
    }

    if (planet === "europa") {
      img.src = "./starter-code/assets/destination/image-europa.png";
      name.textContent = "EUROPA";
      desc.textContent = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
      distance.textContent = "628 MIL. KM";
      time.textContent = "3 YEARS";
    }

    if (planet === "titan") {
      img.src = "./starter-code/assets/destination/image-titan.png";
      name.textContent = "TITAN";
      desc.textContent = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
      distance.textContent = "1.6 BIL. KM";
      time.textContent = "7 YEARS";
    }

    img.classList.remove("fade");
      name.classList.remove("fade");
      desc.classList.remove("fade");
}, 200);
  });
});

const crewDots = document.querySelectorAll(".dots span");

const crewRole = document.querySelector(".crew-role");
const crewName = document.querySelector(".crew-name");
const crewDesc = document.querySelector(".crew-desc");
const crewImg = document.querySelector(".crew-img");

crewDots.forEach(dot => {
  dot.addEventListener("click", () => {
    crewDots.forEach(d => d.classList.remove("active"));
    dot.classList.add("active");

    const crew = dot.getAttribute("data-crew");


    if (crew === "hurley") {
      crewRole.textContent = "COMMANDER";
      crewName.textContent = "DOUGLAS HURLEY";
      crewDesc.textContent = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
      crewImg.src = "./starter-code/assets/crew/image-douglas-hurley.png";
    }

    if (crew === "shuttleworth") {
      crewRole.textContent = "MISSION SPECIALIST";
      crewName.textContent = "MARK SHUTTLEWORTH";
      crewDesc.textContent = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
      crewImg.src = "starter-code/assets/crew/image-mark-shuttleworth.png";
    }

    if (crew === "glover") {
      crewRole.textContent = "PILOT";
      crewName.textContent = "VICTOR GLOVER";
      crewDesc.textContent = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ";
      crewImg.src = "./starter-code/assets/crew/image-victor-glover.png";
    }

    if (crew === "ansari") {
      crewRole.textContent = "FLIGHT ENGINEER";
      crewName.textContent = "ANOUSHEH ANSARI";
      crewDesc.textContent = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
      crewImg.src = "./starter-code/assets/crew/image-anousheh-ansari.png";
    }

  });
});

const techButtons = document.querySelectorAll(".tech-tabs button");

const techName = document.querySelector(".tech-name");
const techDesc = document.querySelector(".tech-desc");
const techImg = document.querySelector(".tech-img");

techButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    techButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const tech = btn.getAttribute("data-tech");

    techImg.classList.add("fade");
    techName.classList.add("fade");
    techDesc.classList.add("fade");

    setTimeout(() => {

      if (tech === "vehicle") {
        techName.textContent = "LAUNCH VEHICLE";
        techDesc.textContent = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
        techImg.src = "./starter-code/assets/technology/image-launch-vehicle-portrait.jpg";
      }

      if (tech === "spaceport") {
        techName.textContent = "SPACEPORT";
        techDesc.textContent = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.";
        techImg.src = "./starter-code/assets/technology/image-spaceport-portrait.jpg";
      }

      if (tech === "capsule") {
        techName.textContent = "SPACE CAPSULE";
        techDesc.textContent = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
        techImg.src = "./starter-code/assets/technology/image-space-capsule-portrait.jpg";
      }

      techImg.classList.remove("fade");
      techName.classList.remove("fade");
      techDesc.classList.remove("fade");

    }, 200);

  });
});