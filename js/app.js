let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
    
    
}

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("open");
}

const sr = ScrollReveal({
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.banner-content, .newsletter, .blog-header', {delay: 200, origin:'left'})
sr.reveal('.featured-left, .featured-right, .blog-card', {delay: 200, origin:'top'})

function redirectToFeaturePage(featureId, featurePage) {
    document.getElementById(featureId).addEventListener('click', function () {
        // Redirect to another HTML page
        window.location.href = featurePage;
    });
}

redirectToFeaturePage('feature1', 'feature1.html');
redirectToFeaturePage('feature2', 'feature2.html');

function scrollToFeature() {
    // Get the position of the feature section
    const featureSection = document.getElementById('feature-section');
    const featureSectionPosition = featureSection.offsetTop;

    // Scroll to the feature section
    window.scrollTo({
        top: featureSectionPosition,
        behavior: 'smooth'
    });
}