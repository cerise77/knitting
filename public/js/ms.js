//const TweenMax = require ('gsap');
//import {TimelineMax} from 'gsap';
/*import TweenMax from 'gsap';
import clamp from 'clamp';*/
/*var menu_navigation = document.getElementById("head");
var hamburger_icon = document.getElementById("hamburger-menu");
var shadow_layer = document.getElementById("shadow_layer");
var L = 900;


hamburger_icon.onclick = function() {
  toggle_panel_visibility(menu_navigation, shadow_layer, document.body);
};*/

/*hamburger_icon.on('click', function () {
    cart.removeClass('speed-in');
    toggle_panel_visibility(menu_navigation, shadow_layer, $('body'));
});*/


/*cart_trigger.on('click', function () {
    menu_navigation.removeClass('speed-in');
    toggle_panel_visibility(cart, shadow_layer, $('body'));
});*/

/*shadow_layer.on('click', function () {
    cart.removeClass('speed-in');
    menu_navigation.removeClass('speed-in');
    shadow_layer.removeClass('is-visible');
    $('body').removeClass('overflow-hidden');
});*/

/*move_navigation(menu_navigation, L);

$(window).on('resize', function () {
    move_navigation(menu_navigation, $L);
    if ($(window).width() >= $L && menu_navigation.hasClass('speed-in')) {
        menu_navigation.removeClass('speed-in');
        shadow_layer.removeClass('is-visible');
        $('body').removeClass('overflow-hidden');
    }
});


function toggle_panel_visibility(panel, background_layer, body) {
    if (panel.hasClass('speed-in')) {
        panel.removeClass('speed-in');
        background_layer.removeClass('is-visible');
        body.removeClass('overflow-hidden');
    } else {
        panel.addClass('speed-in');
        background_layer.addClass('is-visible');
        body.addClass('overflow-hidden');
    }
}

function move_navigation(navigation, $MQ) {
    if ($(window).width() >= $MQ) {
        navigation.detach();
        navigation.appendTo('header');
    } else {
        navigation.detach();
        navigation.insertAfter('header');
    }
}*/

/*var myCarousel = document.getElementById('but');

myCarousel.onmouseover = function(event){
  event.target.style.background = 'pink';
};*/

/*$(document).ready(function () {


  $('.but').on('mouseover', function () {
    $('.but').css('background', 'blue');
  });



});*/




$(document).ready(function () {

  /*------design-------*/

    /*$('.main-p').on('mouseover', function() {
        //$(this).css('color', 'rgb(0, 0, 0, 0.4)');
        $(this).css('background', 'rgb(0, 0, 0, 0.4)');
        console.log('gxdfgdf');
    });

    $('.main-p').on('mouseout', function() {
        //$(this).css('color', 'rgb(0, 0, 0, 1)');
        $(this).css('background', 'white');
    });*/



      /*$.ajax("data/jersey1.json", {
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        success: function(data) {
            var products = $.parseJSON(data);
            for (var i=0;i<products.length;++i)
            {
            var $template = $($('#productTemplate').html());

                $template.find('img').attr("src", products[i]["picture"]);

                $template.find('h3').text(products[i]["name"]);
                $template.find('h5').text(products[i]["name"]);

                $template.find('p').text(products[i]["description"].substring(0,80));
                $template.find('article').text(products[i]["description"]);

                $template.find('s').text('$' + products[i]["oldprice"]);
                $template.find('.price').append('$' + products[i]["price"]);
                $template.find('.prices').text('$' + products[i]["price"]);

                $template.data('id', products[i].id);
                $template.data('name', products[i]["name"]);
                $template.data('price', products[i]["price"]);
                $template.data('image', products[i]["picture"]);
                $("<li></li>").append($template).appendTo("#gallery-items");
            }
        }
    });
  }*/

/*-------canvas-----*/
  /*let state = {pos:0};

  let cols = 50;
  let rows = 50;
  let canvas = $('#canvas')[0];
  //let canvas = $('.canvas')[0];
  let context = canvas.getContext("2d");
  let image = $('#image1')[0];
  let image2 = $('#image2')[0];

  let newcanvas = $('<canvas></canvas>')[0];
  let newcontext = newcanvas.getContext("2d");


  //$('body').click(function(event) {
  //	let tl = new TimelineMax();

  //	tl.to(state, 1, {pos:1});
  //});

  $('.sec-img').mouseover(function(event) {
    let tl = new TimelineMax();

    if(state.pos===2) {
      tl.to(state, 1, {pos: 0});
    } else{
      tl.to(state, 1, {pos: 2});
    }
  });

  ///*$('body').mouseover(function(event) {
  //	let tl = new TimelineMax();

  //	if(state.pos===2) {
  //		tl.to(state, 1, {pos: 0});
  //	} else{
  //		tl.to(state, 1, {pos: 2});
  //	}
  //});

  function setCanvasSize(canvas) {
  	//canvas.width = 1050;
  	//canvas.height = 600;
    canvas.width = 728;
  	canvas.height = 523;
  	$(canvas).css('width', "65%");
  	$(canvas).css('height', "30%");
  }

  setCanvasSize(canvas);
  setCanvasSize(newcanvas);
  //$('body').prepend(newcanvas);
  let xw,xh,delay;

  function RenderTempCanvas(t) {
  //  newcontext.clearRect(0,0,1050,600);
    newcontext.clearRect(0,0,728,523);
    newcontext.drawImage(image2, 0,0);
    //newcontext.clearRect(0,0,100 + t/10,100 + t/10);
  	//newcontext.clearRect(0,0,1800,1200);
  	// newcontext.fillRect(0,0,1800,1200);
  	//newcontext.drawImage(image2, 0,0);
  	// newcontext.clearRect(0,0,100 + t/10,100 + t/10);
  	//xw = 1800/cols;
  	//xh = 1200/rows;
  	//for (var i = 0; i<=cols; i++) {
  	//	for (var j = 0; j<=rows; j++) {
  	//		delay = (j*i)/(cols*rows);
  	//		newcontext.clearRect(i*xw,j*xh,xw*clamp(state.pos -delay,0,1),xh*clamp(state.pos -delay,0,1));
  	//	}
  	//}
    xw = 1800/cols;
  	xh = 1200/rows;
    for (var i = 0; i<=cols; i++) {
      for (var j = 0; j<=rows; j++) {
        delay = (j*i)/(cols*rows);
  			newcontext.clearRect(i*xw,j*xh,xw*clamp(state.pos -delay,0,1),xh*clamp(state.pos -delay,0,1));
        //newcontext.clearRect(i*xw,j*xh,xw*state.pos,xh*state.pos);
        //newcontext.clearRect(i*xw,j*xh,xw/2,xh/2);
      }
    }
  }

  function render(t) {
  	context.clearRect(0,0,728,523);
  	context.drawImage(image, 0,0);

    //context.clearRect(0,0,100,100);
  	RenderTempCanvas(t);

  	context.drawImage(newcanvas, 0,0);

  }


  function draw(t) {
  	render(t);
  	window.requestAnimationFrame(draw);
  }

draw();*/

/*------------technical----------*/
$('.tabs_menu a').click(function(e) {
        e.preventDefault();
        $('.tabs_menu .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.tab').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
    });



/*-------------------Contacts------------*/

    var field = new Array("login", "e-mail", "note", "textarea");

    $("form").submit(function() {
      var error=0;
      $("form").find(":input").each(function() {
        for(var i=0;i<field.length;i++){
          if($(this).attr("name")==field[i]){

            if(!$(this).val()){
              $(this).css('border', 'red 1px solid');
              error=1;

            }
            else{
              $(this).css('border', 'gray 1px solid');
            }

          }
        }
       })

      var email = $("#email").val();
        if(!isValidEmailAddress(email)){
        error=2;
        $("#email").css('border', 'red 1px solid');
      }

      if(error==0){
        return true;
      }
      else{
      var err_text = "";
      if(error==1)  err_text="Не все обязательные поля заполнены!";
      if(error==2)  err_text="Введен не корректный e-mail!";

      $("#messenger").html(err_text);
      $("#messenger").fadeIn("slow");
      return false;
      }

    })


});

function isValidEmailAddress(emailAddress) {
  var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  return pattern.test(emailAddress);
  }

/*------------technical----------*/

		/*var tabs = document.getElementById('tabs');
		createTabs(tabs);
		function createTabs(root) {
			var items = root.getElementsByClassName('tabs_item');
			var texts = root.getElementsByClassName('tabs_text');
			root.addEventListener('click', go);
			function go(event) {
				var targ = event.target;
				if (targ.tagName !== 'LI') return;
				var select = 'tabs_item-select';
				for (var i = 0; i < items.length; i++) {
					items[i].classList.remove('select');
				}
				targ.classList.add('select');
				for (var i = 0; i < texts.length; i++) {
					texts[i].style.display = 'none'
				}
				var id = targ.getAttribute('data-id');;
				root.querySelector('div[id=' + id + ']').style.display = 'block';
			}
		};*/


    /*function validateURL(url) {
    var reurl = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    return reurl.test(url);
}

function validateForm()
{
    // Validate URL
    var url = $("#frurl").val();
    if (validateURL(url)) { } else {
        alert("Please enter a valid URL, remember including http://");
        return false;
    }

    // Validate Title
    var title = $("#frtitle").val();
    if (title=="" || title==null) {
        alert("Please enter only alphanumeric values for your advertisement title");
        return false;
    }

    // Validate Email
    var email = $("#fremail").val();
    if ((/(.+)@(.+){2,}\.(.+){2,}/.test(email)) || email=="" || email==null) { } else {
        alert("Please enter a valid email");
        return false;
    }
  return true;
}*/
