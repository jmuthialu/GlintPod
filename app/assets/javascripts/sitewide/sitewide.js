var dnArrow1 = $('#dnArrow1');
var sec2 = $('#sec2');
var sec3 = $('#sec3');
var downArrowInterval = setInterval('downArrowFlash()', 3000);


$('body').animate({
    opacity : 1
},2000);


function downArrowFlash() {
    dnArrow1.fadeOut(2000).fadeIn(2000).delay(3000);
}

$(dnArrow1).on('click', function(e) {
    $('html, body').animate({
        scrollTop: sec2.offset().top + 5
    }, 700);
});


/*
var $images = $('.images');
var imgCount = $('.images').length -1;
var count = 0;

console.log('image Count: ', imgCount);

$images.hide();
$images.eq(0).fadeIn(1500);

var schedule = setInterval('imageChange()', 5000);

function imageChange(){
    $images.eq(count).fadeOut(1500);
    count = count >= imgCount ? 0: count +=1;
    $images.eq(count).fadeIn(1500);
}
*/