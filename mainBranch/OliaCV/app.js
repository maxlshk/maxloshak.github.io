const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');

            if (entry.target.classList.contains('animated-list')) {
                const liElements = entry.target.querySelectorAll('li');

                liElements.forEach(li => {
                    li.classList.add('visible');
                });
            }
        } else {
            entry.target.classList.remove('show');
            if (entry.target.classList.contains('animated-list')) {
                const liElements = entry.target.querySelectorAll('li');

                liElements.forEach(li => {
                    li.classList.remove('visible');
                });
            }
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));