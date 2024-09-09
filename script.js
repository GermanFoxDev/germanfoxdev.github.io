document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.buttons button');
    const contextDivs = document.querySelectorAll('.context > div');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and context divs
            buttons.forEach(btn => btn.classList.remove('active'));
            contextDivs.forEach(div => div.classList.remove('active'));

            // Add active class to the clicked button
            button.classList.add('active');

            // Show the context div corresponding to the clicked button
            const targetId = button.getAttribute('data-target');
            const targetDiv = document.getElementById(targetId);
            if (targetDiv) {
                targetDiv.classList.add('active');
            }
        });
    });
});
