document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to Explore South Korea!");
});
// script.js

function toggleDetails(detailsId) {
    const details = document.getElementById(detailsId);
    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}