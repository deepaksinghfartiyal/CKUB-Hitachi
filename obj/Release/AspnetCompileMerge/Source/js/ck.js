$.QueryString = (function(a) {
	if (a == "") return {};
	var b = {};
	for (var i = 0; i < a.length; ++i)
	{
		var p=a[i].split('=');
		if (p.length != 2) continue;
		b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
	}
	return b;
})(window.location.search.substr(1).split('&'))

$.ConvertTime = (function(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = month + ' ' + date + ', ' + year;// + ' ' + hour + ':' + min + ':' + sec ;
  return time;
})

Number.prototype.formatMoney = function(c, d, t){
var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};
 
function isInt(value){ 
  if ((parseFloat(value) == parseInt(value)) && !isNaN(value))
	return true;
  else
	return false;
}

var Grid = {
	init: function() {
		console.log("Grid");
		$(".product-grid .hover .thumbs ul li img").mouseover(function(e){
			var src = $(this).attr("src");
			$(this).closest('.thumbs').children('img').attr("src", src);
			console.log('hover');
		});
		$(".product-grid > div").each(function(e, i){
			if ((e+1)%4 == 0)
				$(this).addClass("display-left");
		});
	}
}

var CK = {
	debug: true,
	log: function() {
	    if (CK.debug && typeof (console) != 'undefined')
	    {
	        console.log(arguments.length > 1 ? arguments : arguments[0]);

	    }
	},
	modal: function(msg) {
		$(".modal.error .copy").text(msg);
		$(".modal.error, .modal-bknd").addClass("active");
	},
	alert: function(code){
		CK.modal(Alerts[code]);
		$(".modal.error").removeClass("yes-no");
		$(".modal.error").addClass("ok");
	},
	prompt: function(code, onConfirm, onCancel) {
		CK.log('promptConfirm', code, Alerts[code]);
		CK.modal(Alerts[code]);
		$(".modal.error").removeClass("ok");
		$(".modal.error").addClass("yes-no");
		
		$('.button.yes').unbind('click');
		$('.button.no').unbind('click');
		$('.button.yes').bind('click', onConfirm);
		$('.button.no').bind('click', onCancel);
	},
	warnReload: function(code){
		return Alerts[code];
	},
	deleteCookie: function( name ) {
	  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	}
}

jQuery(document).ready(function ($) {
  
	//console.log(Locker);
	if(typeof(Grid) != "undefined") Grid.init();
	if (typeof (Locker) != "undefined") Locker.init();
	
	if (typeof (Builder) != "undefined") Builder.init();	
	
	$('.navigation a[href="#"]').click(function() {
		$(this).parent().siblings().removeClass('hover');
		$(this).parent().toggleClass('hover');
	});
	
	$('.product-grid .template').click(function() {
		$(this).siblings().removeClass('hovered');
		$(this).toggleClass('hovered');
	});
	$('.product-grid .template').mouseover(function() {
		$(this).siblings().removeClass('hovered');
	});
});