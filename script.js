$(document).ready(function(){
    
    $(".nav-link.active").css("background-color","green");
    //$(".nav-pills.nav-link.active, .nav-pills.show>.nav-link").css("background-color","green")
    $(window).scroll(function(){



        if($(document).scrollTop()> 50){
            
            $(".navbar").css("background-color","black");
            $(".nav-link.active").css("background-color","white");
            $(".nav-link").css("background-color","transparent")
            
        }
        else{
            $(".navbar").css("background-color","transparent");
            $(".nav-link.active").css("background-color","green");
            
        }
    })
})


// Добавляет сглаживание на все ссылки внутри навбара

$("#navbar-menu a").on('click',function(event){
    if(this.hash!==""){
        event.preventDefault();

        var hash = this.hash;
        // Использует jQuery's animate() метод чтобы добавить эффект смазывание при скролле страницы(Северин, привет)
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area

        $('html,body').animate({
            scrollTop:$(hash).offset().top
        },800,function(){
          
            window.location.hash=hash;
        });
    }
}



);
var myHeading = document.querySelector('a');

function setUserName(){
var myName = prompt('Введите ваше имя');
localStorage.setItem('name', myName);
myHeading.textContent = 'Добро пожаловать,' + ' ' + myName;
}
if(!localStorage.getItem('name')) {
setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Добро пожаловать' + storedName;
}
