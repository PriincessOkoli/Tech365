let typed = new Typed('.auto-input',{strings: ['experience', 'experience','result','design', 'applications'],
typeSpeed: 100,
backSpeed: 100,
loop: true,
});

let typeds = new Typed('.auto-inputs',{strings: ['Tech365', 'experience','result-driven','experience'],
typeSpeed: 100,
backSpeed: 100,
loop: true,
});

let linkq = document.querySelectorAll('.navbar a');
let bodyId = document.querySelector('body').id;

for(let link of linkq){
    if(link.dataset.active == bodyId){
        link.classList.add('active');
    }
}



const counters = document.querySelectorAll('.counter')
const speed = 200;

counters.forEach(counter =>{
    const updatecount = () =>{
        const target = counter.getAttribute('data-target')
        const count = +counter.innerText;

        const inc = target/ speed;

        if(count < target){
            counter.innerText = count + inc;
            setTimeout(updatecount, 1)
        }else{
            counter.innerText = target
        }
    
    }
    updatecount()

})


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

   
});


// $(document).ready(function(){
//     $(window).scroll(function(){
//         if($(this).scrollTop() < 40){
//             $('.arrowup').addClass('active');
//         } else {
//             $('.arrowup').removeClass('active');
//         }
//     });


//     $('.arrowup').click(function(){
//         $('html,body').animate({scrollTop : 0}, 800);
//     });


// })
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


