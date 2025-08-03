// Cursor movement
const cursorOuter = document.getElementById('cursorOuter');
const cursorInner = document.getElementById('cursorInner');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  cursorOuter.style.transform = `translate(${x}px, ${y}px)`;
  cursorInner.style.transform = `translate(${x}px, ${y}px)`;
});

// Hero text animation
gsap.to(".km", {
  y: 0,
  opacity: 1,
  duration: 1.5,
  ease: "power4.out",
  stagger: 0.2
});

// Scroll-triggered footer animation
gsap.registerPlugin(ScrollTrigger);

gsap.to(".footer", {
  opacity: 1,
  y: 0,
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".footer",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

// Timezone update for IST
function updateTimeIST() {
  const now = new Date();
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZone: 'Asia/Kolkata'
  };
  const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
  document.getElementById("current-time").textContent = `${timeString} IST`;
}
updateTimeIST();
setInterval(updateTimeIST, 60000);

// Freely follow hover animation for project images
const projects = document.querySelectorAll(".project");

projects.forEach((project) => {
  const image = project.querySelector("img");

  // Create a floating image clone
  const floatImg = image.cloneNode();
  floatImg.style.position = "absolute";
  floatImg.style.pointerEvents = "none";
  floatImg.style.zIndex = "1000";
  floatImg.style.opacity = "0";
  floatImg.style.transition = "transform 0.2s ease, opacity 0.2s ease";
  floatImg.style.width = "200px";
  document.body.appendChild(floatImg);

  project.addEventListener("mousemove", (e) => {
    floatImg.style.top = e.pageY - 100 + "px";
    floatImg.style.left = e.pageX - 100 + "px";
    floatImg.style.opacity = "1";
    floatImg.style.transform = "scale(1.1)";
  });

  project.addEventListener("mouseleave", () => {
    floatImg.style.opacity = "0";
    floatImg.style.transform = "scale(1)";
  });
});