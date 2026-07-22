import { showToast } from "./toast.js";

export function initDecisionPanel(){
  const score = document.getElementById("decisionScore");

  document.getElementById("recomputeButton").addEventListener("click", () => {
    score.textContent = "...";
    setTimeout(() => {
      score.textContent = String(84 + Math.floor(Math.random() * 8));
      showToast("ประมวลผล Waste Decision Intelligence API แล้ว");
    }, 650);
  });

  document.getElementById("approveButton").addEventListener("click", () => {
    showToast("อนุมัติการเพิ่มรถ 2 คันและปรับเส้นทาง R-1204");
  });

  document.getElementById("evidenceButton").addEventListener("click", () => {
    showToast("เปิดหลักฐานเชิงพื้นที่และผลตอบกลับจาก API");
  });
}
