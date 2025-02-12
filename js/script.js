function toggleContent(id) {
	var content = document.getElementById(id);
    var trigger = document.querySelector(`[onclick="toggleContent('${id}')"]`);
    if (content.style.display === 'block') {
        content.style.display = 'none';
        trigger.classList.remove('open');
    } else {
        document.querySelectorAll('.expandable-content').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.expandable').forEach(el => el.classList.remove('open'));
        content.style.display = 'block';
        trigger.classList.add('open');
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const text = "ModernOps Solutions";
    const textElement = document.getElementById("text");
    let index = 0;
    const typingSpeed = window.innerWidth <= 600 ? 75 : 100;

    function typeText() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, typingSpeed);
        }
    }
    typeText();
});