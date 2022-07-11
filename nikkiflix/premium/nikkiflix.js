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

//style-my-tootltips by malihu (http://manos.malihu.gr)
//plugin home http://manos.malihu.gr/style-my-tooltips-jquery-plugin
(function($){
	var methods={
		init:function(options){
			var defaults={ 
				tip_follows_cursor:false, //tooltip follows cursor: boolean
				tip_delay_time:700, //tooltip delay before displaying: milliseconds
				tip_fade_speed:300, //tooltip fade in/out speed: milliseconds
				attribute:"title" //tooltip text come from this attribute
			},
			options=$.extend(defaults,options);
			if($("#s-m-t-tooltip").length===0){
				$("body").append("<div id='s-m-t-tooltip'><div></div></div>");
			}
			var smtTooltip=$("#s-m-t-tooltip"); 
			smtTooltip.css({"position":"absolute","display":"none"}).data("smt-z-index",smtTooltip.css("z-index")).children("div").css({"width":"100%","height":"100%"});
			function smtGetCursorCoords(event){
				var smtCursorCoordsX=event.pageX,
					smtCursorCoordsY=event.pageY;
				smtTooltip.style_my_tooltips("position",{
					smtCursorCoordsX:smtCursorCoordsX,
					smtCursorCoordsY:smtCursorCoordsY
				});
			}
			$(".smt-current-element").live("mouseout mousedown click",function(){
				var $this=$(this);
				clearTimeout(smtTooltip_delay);
				smtTooltip.style_my_tooltips("hide",{
					speed:$this.data("smt-fade-speed")
				});
				$(document).unbind("mousemove");
				$this.removeClass("smt-current-element");
				if($this.attr(options.attribute)===""){
					$this.attr(options.attribute,$this.data("smt-title"));
				}
			});
			return this["live"]("mouseover",function(event){
				var $this=$(this),
					title=$this.attr(options.attribute);
				$this.addClass("smt-current-element").data({"smt-title":title,"smt-fade-speed":options.tip_fade_speed}).attr(options.attribute,"");
				smtTooltip.style_my_tooltips("update",{
					title:title,
					speed:options.tip_fade_speed,
					delay:options.tip_delay_time,
					tip_follows_cursor:options.tip_follows_cursor
				});
				$(document).bind("mousemove", function(event){
					smtGetCursorCoords(event); 
				});
			});
		},
		update:function(options){
			var $this=$(this);
			$this.stop().css({"display":"none","z-index":$this.data("smt-z-index")}).children("div").text(options.title);
			smtTooltip_delay=setTimeout(function(){
				$this.style_my_tooltips("show",{
					speed:options.speed,
					tip_follows_cursor:options.tip_follows_cursor
				})
			}, options.delay);
		},
		show:function(options){
			var $this=$(this);
			$this.stop().fadeTo(options.speed,1);
			if(!options.tip_follows_cursor){
				$(document).unbind("mousemove");
			}
		},
		hide:function(options){
			var $this=$(this);
			$this.stop().fadeTo(options.speed,0,function(){
				$this.css({"z-index":"-1"});
			});
		},
		position:function(options){
			var $this=$(this),
				winScrollX=$(window).scrollLeft(),
				winScrollY=$(window).scrollTop(),
				tipWidth=$this.outerWidth(true),
				tipHeight=$this.outerHeight(true),
				leftOffset=(options.smtCursorCoordsX+tipWidth)-winScrollX,
				topOffset=(options.smtCursorCoordsY+tipHeight)-winScrollY;
			if(leftOffset<=$(window).width() && leftOffset<=$(document).width()){
				$this.css("left",options.smtCursorCoordsX);
			}else{
				var thePosX=options.smtCursorCoordsX-tipWidth;
				if(thePosX>=winScrollX){
					$this.css("left",thePosX);
				}else{
					$this.css("left",winScrollX);
				}
			}
			if(topOffset<=$(window).height() && topOffset<=$(document).height()){
				$this.css("top",options.smtCursorCoordsY);
			}else{
				var thePosY=options.smtCursorCoordsY-tipHeight;
				if(thePosY>=winScrollY){
					$this.css("top",thePosY);
				}else{
					$this.css("top",winScrollY);
				}
			}
		}
	}
	$.fn.style_my_tooltips=function(method){
		if(methods[method]){
			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
		}else if(typeof method==="object" || !method){
			return methods.init.apply(this,arguments);
		}else{
			$.error("Method "+method+" does not exist");
		}
	};
})(jQuery);  


<!-- TOOLTIPS SCRIPT -->
(function($){
$(document).ready(function(){
$("[title]").style_my_tooltips({
tip_follows_cursor:true,
tip_delay_time:200,
tip_fade_speed:350
});
});
})(jQuery);
</script>
