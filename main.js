const crossout = document.querySelectorAll('.crossout');
crossout.forEach(el => el.addEventListener('click', () => {
    if (el.style.textDecoration === '') {
    el.style.textDecoration = 'line-through'
    }

    else {
        crossout.style.textDecoration = ''
    }
}))