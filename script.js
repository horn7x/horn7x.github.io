document.addEventListener("DOMContentLoaded", function() {
    const roles = ["Developer", "Student", "Gamer", "YouTuber"];
    const profileRole = document.getElementById("profileRole");

    let currentIndex = 0;

    function switchRole() {
        profileRole.style.transform = "scale(0.8)";
        setTimeout(() => {
            profileRole.textContent = roles[currentIndex];
            profileRole.style.transform = "scale(1)";
        }, 500);
        currentIndex = (currentIndex + 1) % roles.length;
        setTimeout(switchRole, 2500);
    }

    switchRole();
});
