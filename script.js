document.addEventListener('DOMContentLoaded', () => {
    const bloodGroupLinks = document.querySelectorAll('.blood-group-link');

    bloodGroupLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            console.log('User clicked on a blood group link.');
            // Add any specific logic here if needed
            // For example, you could add an animation before redirecting
            // event.preventDefault(); // Uncomment this line if you want to delay the redirect
            // setTimeout(() => {
            //     window.location.href = link.href;
            // }, 500);
        });
    });
});