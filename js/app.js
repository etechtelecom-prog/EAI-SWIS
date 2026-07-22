import { initMap } from "./modules/map.js";
import { initNavigation } from "./modules/navigation.js";
import { initDecisionPanel } from "./modules/decision.js";
import { showToast } from "./modules/toast.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initMap();
  initDecisionPanel();

  document.querySelectorAll(".quick-grid button").forEach((button) => {
    button.addEventListener("click", () => {
      const label = button.querySelector("span")?.textContent || "คำสั่ง";
      showToast(`เปิดเมนู: ${label}`);
    });
  });
});
