
$('.nav-icon').click(function(){
    $('#nav-links').toggleClass("responsive");
        return false;
});


let section=document.querySelector('section');
let navLinks=document.querySelectorAll('nav a');


window.onscroll = () =>{

    section.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop + 1;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('nav a[href*='+id + ']').classList.add('active');
             
});

}
});


}