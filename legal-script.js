/**
 * Nelson Edeh Academy — Legal & FAQ Configuration
 */

const ACADEMY_CONFIG = {
    name: "Nelson Edeh Academy",
    operator: "Nelson Edeh",
    website: "https://nelsonedeh.com",
    supportEmail: "academy@nelsonedeh.com",
    country: "Nigeria",
    lastUpdated: "19 November 2026"
};

document.addEventListener('DOMContentLoaded', () => {
    // Populate dynamic values if placeholders exist
    const placeholders = {
        'academy-name': ACADEMY_CONFIG.name,
        'academy-operator': ACADEMY_CONFIG.operator,
        'academy-website': ACADEMY_CONFIG.website,
        'academy-email': ACADEMY_CONFIG.supportEmail,
        'academy-country': ACADEMY_CONFIG.country,
        'last-updated': ACADEMY_CONFIG.lastUpdated
    };

    Object.keys(placeholders).forEach(key => {
        document.querySelectorAll(`[data-config="${key}"]`).forEach(el => {
            if (el.tagName === 'A' && key === 'academy-email') {
                el.href = `mailto:${placeholders[key]}`;
                el.textContent = placeholders[key];
            } else if (el.tagName === 'A' && key === 'academy-website') {
                el.href = placeholders[key];
                el.textContent = placeholders[key].replace('https://', '');
            } else {
                el.textContent = placeholders[key];
            }
        });
    });

    // Accordion Logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');

            // Close all other items
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
            });

            if (!isActive) {
                item.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // Mobile TOC Toggle
    const tocToggle = document.querySelector('.toc-mobile-toggle');
    const tocCard = document.querySelector('.toc-card');
    if (tocToggle && tocCard) {
        tocToggle.addEventListener('click', () => {
            tocCard.classList.toggle('active');
            const icon = tocToggle.querySelector('i');
            if (icon) {
                icon.style.transform = tocCard.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
            }
        });
    }

    // Scroll Spy for TOC (Optional but nice)
    const sections = document.querySelectorAll('.policy-content section');
    const tocLinks = document.querySelectorAll('.toc-list a');

    if (sections.length > 0 && tocLinks.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });

            tocLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });
    }
});
