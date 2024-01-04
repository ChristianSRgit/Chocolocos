document.addEventListener('DOMContentLoaded', (event) => {
    const footer = document.getElementById('footer');
    const year = new Date().getFullYear();
    footer.textContent = `Chocolocos ${year} ®`;
});
