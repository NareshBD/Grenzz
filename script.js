// Loader
window.addEventListener("load", () => {
  document.querySelector(".loader-wrapper").style.display = "none";
});

// AOS
AOS.init({
  duration: 1000,
  once: true,
});

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".custom-navbar");

  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Counter Animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = target / 100;

    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 30);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

// Project Filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const projectItems = document.querySelectorAll(".project-item");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    filterButtons.forEach(button => button.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    projectItems.forEach(item => {

      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }

    });

  });
});

// Back To Top
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Chatbot
const chatbotToggle = document.querySelector(".chatbot-toggle");
const chatbotContainer = document.querySelector(".chatbot-container");
const closeChat = document.querySelector(".close-chat");
const sendBtn = document.getElementById("send-btn");
const chatInput = document.getElementById("chat-input");
const chatBody = document.getElementById("chat-body");

chatbotToggle.addEventListener("click", () => {
  chatbotContainer.style.display = "block";
});

closeChat.addEventListener("click", () => {
  chatbotContainer.style.display = "none";
});

const botReplies = {
  "what is leed certification":
    "LEED certification is a globally recognized green building rating system.",

  "how to save energy":
    "Energy can be saved using efficient lighting, HVAC optimization, and sustainable materials.",

  "green building":
    "Green buildings focus on sustainability, energy efficiency, and environmental responsibility.",

  "sustainability":
    "Sustainability means meeting present needs without compromising future generations."
};

function addMessage(message, className) {

  const msg = document.createElement("div");
  msg.classList.add(className);
  msg.innerText = message;

  chatBody.appendChild(msg);

  chatBody.scrollTop = chatBody.scrollHeight;
}

function botTyping(reply) {

  const typing = document.createElement("div");
  typing.classList.add("bot-message");
  typing.innerText = "Typing...";

  chatBody.appendChild(typing);

  setTimeout(() => {
    typing.remove();
    addMessage(reply, "bot-message");
  }, 1200);
}

sendBtn.addEventListener("click", () => {

  const userText = chatInput.value.toLowerCase().trim();

  if (userText === "") return;

  addMessage(userText, "user-message");

  let reply = "Please contact our sustainability experts for more information.";

  for (const key in botReplies) {
    if (userText.includes(key)) {
      reply = botReplies[key];
    }
  }

  botTyping(reply);

  chatInput.value = "";
});

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e){

  e.preventDefault();

  alert("Message Sent Successfully!");

  this.reset();

});

// Dark Mode
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

});
