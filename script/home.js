// scroll to top button

// esta função fará com que o botão fique visível apenas após a rolagem do conteúdo.
window.addEventListener('scroll', function() {
    let scroll = document.querySelector('.scrollTop') // let scroll select .scrollTop class
        scroll.classList.toggle('active', window.scrollY > 450)
})

// função scroll to top.
function backTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function sobremim(){
    window.scrollTo({
        top: 510,
        behavior: 'smooth'
    })
}

function trabalhos(){
    window.scrollTo({
        top: 1200,
        behavior: 'smooth'
    })
}

function experiencias(){
    window.scrollTo({
        top: 2240,
        behavior: 'smooth'
    })
}

function contato(){
    window.scrollTo({
        top: 3300,
        behavior: 'smooth'
    })
}