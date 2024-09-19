document.querySelectorAll(".home-scroll_section").forEach((section) => {
    let childTriggers = section.querySelectorAll(".home-scroll_text-item");
    // switch active class
    function makeItemActive(index) {
        childTriggers.forEach(trigger => trigger.classList.remove("is-active"));

        childTriggers[index].classList.add("is-active");
    }
    makeItemActive(0);

    // create triggers
    childTriggers.forEach((trigger, index) => {
        ScrollTrigger.create({
            trigger: trigger,
            start: "top center",
            end: "bottom center",
            onToggle: ({ isActive }) => {
                if (isActive) {
                    makeItemActive(index);
                }
            }
        });
    });
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // 切換菜單顯示
});