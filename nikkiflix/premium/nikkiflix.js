$(document).ready(function() {
//
$('a.poplight[href^=#]').click(function() {
var popID = $(this).attr('rel'); //Get Popup Name
var popURL = $(this).attr('href'); //Get Popup href to define size
var query= popURL.split('?');
var dim= query[1].split('&');
var popWidth = dim[0].split('=')[1]; //Gets the first query string value
$('#' + popID).fadeIn().css({ 'width': Number( popWidth ) }).prepend('<div  style="width:900px; text-align:right; font-size:15px; right:30px; top:30px; position:absolute;"><a class="close" style="text-decoration:none;   background:rgba(33, 33, 35, 0.75); padding:10px; padding-bottom:0px; border-radius:100px; border:1px solid #909091;"><span class="iconify" data-icon="bi:x-lg" style="color: white;"></span></a></div>');
var popMargTop = ($('#' + popID).height() + 80) / 2;
var popMargLeft = ($('#' + popID).width() + 80) / 2;
//Apply Margin to Popup
$('#' + popID).css({
'margin-top' : -popMargTop,
'margin-left' : -popMargLeft
});
$('body').append('<div id="fade"></div>');
$('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn(); //Fade in the fade layer - .css({'filter' : 'alpha(opacity=80)'})
return false;
});
$('a.close, #fade').live('click', function() {
$('#fade , .popup_block').fadeOut(function() {
$('#fade, a.close').remove(); //fade them both out
});
return false;
});
});
