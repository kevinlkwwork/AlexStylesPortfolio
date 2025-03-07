// Open modal
document.querySelectorAll('.project-thumbnail').forEach(item => {
    item.addEventListener('click', function() {
        const modalId = item.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'flex';
    });
});

// Close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
    }
}
