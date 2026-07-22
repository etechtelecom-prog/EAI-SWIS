import { showToast } from "./toast.js";

export function initNavigation(){
  const sidebar = document.getElementById("sidebar");
  const toggle = () => sidebar.classList.toggle("open");

  document.getElementById("menuButton").addEventListener("click", toggle);
  document.getElementById("mobileMenuButton").addEventListener("click", toggle);

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      const thai = button.querySelector("b")?.textContent || "เมนู";
      const english = button.querySelector("small")?.textContent || "";
      showToast(`${thai} • ${english}`);
      if(window.innerWidth <= 700) sidebar.classList.remove("open");
    });
  });

  document.addEventListener("click", (event) => {
    if(window.innerWidth <= 700 && sidebar.classList.contains("open") &&
       !sidebar.contains(event.target) &&
       !event.target.closest("#menuButton") &&
       !event.target.closest("#mobileMenuButton")){
      sidebar.classList.remove("open");
    }
  });
}
