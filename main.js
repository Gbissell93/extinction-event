const crossout = document.querySelectorAll('.crossout');
crossout.forEach(el => el.addEventListener('click', () => {
    el.style.textDecoration = 'line-through'
}))

const poof = document.querySelectorAll('.poof');
poof.forEach(el => el.addEventListener('click', () => { 
    el.style.opacity = '0'
}))

const bye = document.querySelectorAll('.bye');
bye.forEach(el => el.addEventListener('click', () => { 
    el.style.width = '0'
}))

const destroy = document.querySelector('#destroy-all');
destroy.addEventListener('click', () => {
    crossout.forEach(el => el.style.textDecoration = 'line-through')
    poof.forEach(el => el.style.opacity = '0')
    bye.forEach(el => el.style.width = '0')
    
    
})