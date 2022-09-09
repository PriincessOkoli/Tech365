

window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.arrowup');
    scroll.classList.toggle("active", window.scrollY > 500)
})


// function scrollToTop(){
//     window.scrollTo(0,0);
// }
function scrollToTop(){
    window.scrollTo({
        top: 0,
    });
}

$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20){
            $('.header').addClass('sticky');
        }else{
            $('.header').removeClass('sticky');
        }


    })

    $('.ellipsis').click(function(){
        $('.header .navbar').toggleClass('active');
        $('.ellipsis i').toggleClass('active');
    }); 
    $('.navbar').click(function(){
        $('.header .navbar').removeClass('active');
        $('.ellipsis i').removeClass('active');
    });
    $('#search').click(function(){
        $('.navbar span').toggleClass('active');
        $('.navbar input').toggleClass('active');
        // $('#search span i').toggleClass('active');
    });
    

    

   
});
let linkq = document.querySelectorAll('.navbar a');
let bodyId = document.querySelector('body').id;

for(let link of linkq){
    if(link.dataset.active == bodyId){
        link.classList.add('active');
    }
}


let trainings = document.querySelector('.trainings');
let dropdown = document.querySelector('.dropdown');

// trainings.onhover = ()=>{
//     dropdown.style.display = 'flex';
// }