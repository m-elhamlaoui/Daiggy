document.addEventListener('DOMContentLoaded', () => {
    // Handle me's profile appearance on scroll
    const mohamedProfile = document.getElementById('me');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible-section');
                
                // Animate the underline
                const underline = entry.target.querySelector('div.relative > div.absolute');
                underline.style.animation = 'widthGrow 1.2s ease-out forwards 0.6s';
                
                // Animate title and content
                const title = entry.target.querySelector('h2');
                const heading = entry.target.querySelector('h3');
                const paragraph = entry.target.querySelector('p');
                const skills = entry.target.querySelectorAll('.skill-tag');
                
                title.style.animation = 'slideIn 0.8s ease-out forwards 0.8s';
                heading.style.animation = 'slideIn 0.8s ease-out forwards 1s';
                paragraph.style.animation = 'slideIn 0.8s ease-out forwards 1.2s';
                
                // Animate skills with stagger
                skills.forEach((skill, index) => {
                    skill.style.animation = `slideIn 0.6s ease-out forwards ${1.4 + index * 0.1}s`;
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    observer.observe(mohamedProfile);
});