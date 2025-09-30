async function loadInclude(id, file) {
  const el = document.getElementById(id);
  if (el) {
    const resp = await fetch(file);
    el.innerHTML = await resp.text();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  loadInclude("header", "header.html");
  loadInclude("nav", "nav.html");
  loadInclude("footer", "footer.html");
});
