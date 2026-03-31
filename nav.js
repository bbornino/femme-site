async function loadNav() {
    const placeholder = document.getElementById('nav-placeholder');
    if (!placeholder) return;
    try {
        const response = await fetch('nav.html');
        if (!response.ok) throw new Error(response.statusText);
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const nav = doc.querySelector('nav');
        if (nav) {
            placeholder.appendChild(nav);
            setActiveNavLink();
        } else {
            placeholder.innerHTML = text;
        }
    } catch (error) {
        console.error('Failed to load navigation:', error);
    }
}

function setActiveNavLink() {
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#nav-placeholder .nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === page) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });
}

loadNav();
