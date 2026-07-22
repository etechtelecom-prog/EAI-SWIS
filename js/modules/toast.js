export function showToast(message){
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(window.__eaiToastTimer);
  window.__eaiToastTimer = window.setTimeout(() => toast.classList.remove("show"), 2500);
}
