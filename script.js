window.onload= function(){

    const element= document.querySelector('#Menu');
    const header = document.querySelector('header');
    const a = document.querySelectorAll(".list");
    const nav= document.querySelector('.navigation');

    element.addEventListener('click',function(){
        element.classList.toggle('active');
        nav.classList.toggle('active');
    })

    window.addEventListener("scroll", function(){
        header.classList.toggle('sticky', window.scrollY>0);
    })

    for(var i=0; i<a.length; i++){
        a[i].addEventListener('click',function(){
            nav.classList.toggle('active');
            element.classList.toggle('active');
        })
    }

}

