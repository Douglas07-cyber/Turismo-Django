function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const button = document.querySelector('.toggle-dark-mode');
    const navbar = document.querySelector('.nav-top'); // Seleciona a navbar
    const divisao = document.querySelector('.divisao'); 
    const divisao2 = document.querySelector('.divisao2'); 
    const footer = document.querySelector('.footer'); 

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        if (button) button.textContent = '☀️'; // Sol
        if (navbar) navbar.style.backgroundColor = '#222'; // Cor escura no dark mode
        if (divisao) divisao.style.backgroundColor = '#222'; // Cor escura no dark mode
        if (divisao2) divisao2.style.backgroundColor = '#222'; // Cor escura no dark mode
        if (footer) footer.style.backgroundColor = '#222'; // Cor escura no dark mode        
    } else {
        localStorage.setItem('theme', 'light');
        if (button) button.textContent = '🌙'; // Lua
        if (navbar) navbar.style.backgroundColor = '#5C4033'; // Cor clara no modo normal (padrão do Bootstrap)
        if (divisao) divisao.style.backgroundColor = '#5C4033';
        if (divisao2) divisao2.style.backgroundColor = '#5C4033';
        if (footer) footer.style.backgroundColor = '#5C4033';
    }
}



window.addEventListener('DOMContentLoaded', () => {
    const userPreference = localStorage.getItem('theme');
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const button = document.querySelector('.toggle-dark-mode');
    const navbar = document.querySelector('.nav-top');
    const divisao = document.querySelector('.divisao'); 
    const divisao2 = document.querySelector('.divisao2'); 
    const footer = document.querySelector('.footer'); 

    if (userPreference === 'dark' || (!userPreference && systemPreference)) {
        document.body.classList.add('dark-mode');
        if (button) button.textContent = '☀️';
        if (navbar) navbar.style.backgroundColor = '#222'; // Dark mode ao carregar
        if (divisao) divisao.style.backgroundColor = '#222';
        if (divisao2) divisao2.style.backgroundColor = '#222';
        if (footer) footer.style.backgroundColor = '#222';
    } else {
        if (navbar) navbar.style.backgroundColor = '#5C4033'; // Claro ao carregar
        if (divisao) divisao.style.backgroundColor = '#5C4033';
        if (divisao2) divisao2.style.backgroundColor = '#5C4033';
        if (footer) footer.style.backgroundColor = '#5C4033';
    }
});
