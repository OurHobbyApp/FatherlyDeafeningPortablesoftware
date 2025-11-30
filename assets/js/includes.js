function loadIncludes() {
  const includeTargets = document.querySelectorAll('[data-include]');
  includeTargets.forEach(el => {
    const file = el.getAttribute('data-include');
    fetch(file)
      .then(response => response.text())
      .then(html => { el.innerHTML = html; })
      .catch(err => console.error("Include error:", file, err));
  });
}
document.addEventListener('DOMContentLoaded', loadIncludes);
