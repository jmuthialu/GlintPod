var dnArrow = $('.dnArrow');
var downArrowInterval = setInterval('downArrowFlash()', 3000);

$('body').animate({
    opacity : 1
},2000);

function downArrowFlash() {
    dnArrow.fadeOut(1500).fadeIn(2000).delay(3000);
}

$(dnArrow).on('click', function(e) {
    var currentSect = $(this).parents('.sections');
    var top = currentSect.offset().top;
    var bottom = top + currentSect.height();
    var windowHt = $(window).height(); //gives Viewport Height
    var documentHt = $(document).height(); //gives the height of the document and it can be ouside the scroll area
    var scrollTop = $(document).scrollTop(); //current top position of the document in the viewport

    console.log (bottom);


    if ((scrollTop + windowHt) < documentHt) {
        $('html, body').animate({
            scrollTop: bottom + 5
        }, 700);
    } else {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    }



});


var $images = $('.rotateImages');
var imgCount = $images.length -1;
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
