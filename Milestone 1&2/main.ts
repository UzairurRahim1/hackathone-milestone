const button = document.getElementById ("togglebutton") as HTMLButtonElement
const education = document.getElementById ("Education") as HTMLElement

button.addEventListener('click', () => {
    if (education.style.display === 'none') {
        education.style.display = 'block'
    } else {
        education.style.display = 'none'
    }
});