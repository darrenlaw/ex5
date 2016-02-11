//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function () {

        console.log("ready");

        $(window).ready(function () {
            
            $('h4').hide();
            $('h2#disappear').hide();
            $('h3#warning').hide();
            
            $('#stbutton').one("click", function () {
                $('#stbutton').animate({
                    opacity: 0
                });
                $('#stbutton').css('display', 'none');
                $('#overlay').animate({
                    opacity: 0
                }, 2000, function () {
                    $('#characters').animate({
                        opacity: 1
                    }, 2000, function () {
                        $('#textbox').animate({
                            opacity: 1
                        });
                        $('#overlay').css('display', 'none');


                        $("span#dialogue1").typed({
                            strings: ["Hello, this is just some text.", "^500But... ^500But... ^1000Buuuuut..."],
                            typeSpeed: 40,
                            backDelay: 4500,
                            startDelay: 1000
                        });

                        $('#next').animate({
                            opacity: 1
                        });
                    });
                });
            });
        });

        $('#next').one('click', function () {
            $('p#firstp').hide(function () {
                $('p#secondp').fadeIn(500);
                $('span#dialogue2').typed({
                    strings: ["Hi, this is the second dialogue.", "Dragons are cool!"],
                    typeSpeed: 40,
                    backDelay: 4500,
                    startDelay: 500
                });
                $('#next').one('click', function () {
                    $('p#secondp').hide(function () {
                        $('p#thirdp').fadeIn(500);
                        $('span#dialogue3').typed({
                            strings: ["I can't believe this works!"],
                            typeSpeed: 40,
                            backDelay: 4500,
                            startDelay: 500,
                        });
                        $('h2').delay(1500).fadeIn(1000);

                    });
                });
            });
        });

        $('h2#disappear').click(function () {
            $('section#bg').fadeOut(1000);
            $('h2#disappear').fadeOut(1000);
            $('h3#warning').delay(1000).fadeIn(3500);
        });
    } //end function 
); //end function