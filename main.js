document.addEventListener("DOMContentLoaded", function() {
    var loader = document.getElementById("loader");

    const urlParams = new URLSearchParams(window.location.search);
    const targetPage = urlParams.get('target');

    setTimeout(() => {
        loader.remove();
        if (targetPage) {
            window.location.href = targetPage;
        } else {
            window.location.href = "Komandyry.html";
        }
    }, 1000);
});
