document.addEventListener("DOMContentLoaded", function() {
    var accordionTitles = document.querySelectorAll(".accordion_title");

    accordionTitles.forEach(function(title) {
        title.addEventListener("click", function(e) {
            e.preventDefault();
            var thisTitle = e.target;

            if (!thisTitle.classList.contains("accordion-active")) {
                document.querySelectorAll(".accordion_content").forEach(function(content) {
                    content.style.display = "none";
                });
                document.querySelectorAll(".accordion_title").forEach(function(title) {
                    title.classList.remove("accordion-active");
                });
                document.querySelectorAll('.accordion_arrow').forEach(function(arrow) {
                    arrow.classList.remove('accordion_rotate');
                });
            }

            thisTitle.classList.toggle("accordion-active");
            var nextContent = thisTitle.nextElementSibling;
            if (nextContent.style.display === "block") {
                nextContent.style.display = "none";
            } else {
                nextContent.style.display = "block";
            }
            var arrow = thisTitle.querySelector('.accordion_arrow');
            if (arrow.classList.contains('accordion_rotate')) {
                arrow.classList.remove('accordion_rotate');
            } else {
                arrow.classList.add('accordion_rotate');
            }
        });
    });

    var hamburgerWrapper = document.querySelector('.media_hamburger_wrapper');
    if (hamburgerWrapper) {
        hamburgerWrapper.addEventListener('click', function() {
            var mainNav = document.querySelector('nav.main_nav');
            if (mainNav.classList.contains('sidebar_open')) {
                mainNav.classList.remove('sidebar_open');
            } else {
                mainNav.classList.add('sidebar_open');
            }
        });
    }
});
