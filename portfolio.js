let text = "Mahi Trivedi";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("intro").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
window.onload = typeEffect;
function toggleAbout() {
    const aboutSection = document.getElementById('about');
    if (aboutSection.style.display === 'none') {
        aboutSection.style.display = 'block';
    } else {
        aboutSection.style.display = 'none';
    }
}
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (name === '' || email === '') {
        alert('All fields are required!');
        return false;
    }
    alert('Form submitted successfully!');
    return true;
}
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    })
})