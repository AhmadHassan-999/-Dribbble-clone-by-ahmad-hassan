document.addEventListener("DOMContentLoaded", () => {
  // Menu toggle button aur nav links ko select karo
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Agar dono elements maujood hain to event listener add karo
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      // 'active' class add/remove karo jo menu ko show/hide karti hai
      navLinks.classList.toggle("active");
    });
  }
});
