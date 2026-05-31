/* ==============================
   ARTCORE LAB LANDING PAGE
   File JS chính
================================= */

// Mở / đóng menu trên điện thoại
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});

// Khi bấm vào link menu thì tự đóng menu mobile
const navLinks = document.querySelectorAll(".main-nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("active");
  });
});

// Hiệu ứng hiện dần khi cuộn trang
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Form demo: GitHub Pages không xử lý gửi form nếu chưa kết nối dịch vụ ngoài
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  alert("Cảm ơn bạn! ArtCore Lab đã nhận thông tin demo. Hãy kết nối form với Google Form, Formspree hoặc email để nhận dữ liệu thật.");
  contactForm.reset();
});
