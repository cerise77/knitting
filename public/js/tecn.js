
/*---------One-------------*/
var myCarouselO = document.getElementById('carusel-one');

if (myCarouselO && myCarouselO.hasChildNodes()) {
    var imagesWrapperO = document.getElementById('wrapper-one');
    var prevArrowO = document.getElementById('prev-car-one');
    var nextArrowO = document.getElementById('next-car-one');
    var childNodesO = myCarouselO.childNodes;
    var imagesArrayO = [];

    for (var i = 0; i < childNodesO.length; i++) {
        var currentNodeO = childNodesO[i];
        if (currentNodeO.nodeName === 'IMG') {
            imagesArrayO.push(currentNodeO.src);
            currentNodeO.classList.add('hide');
        }
    }

imagesWrapperO.style.backgroundImage = 'url(' + imagesArrayO[0] + ')';
var currentImageO = 0;
var numberOfImagesO = imagesArrayO.length;

prevArrowO.onclick = function () {
    handleSlideshowArrowOne('prev-car-one');
};

nextArrowO.onclick = function () {
    handleSlideshowArrowOne('next-car-one');
};

function handleSlideshowArrowOne(valo) {
    if (valo === 'prev-car-one') {
        if (currentImageO > 0) {
            currentImageO--;
        } else {
            currentImageO = numberOfImagesO - 1;
        }
    } else if (valo === 'next-car-one') {
        if (currentImageO < numberOfImagesO - 1) {
            currentImageO++;
        } else {
            currentImageO = 0;
        }
    }

    imagesWrapperO.classList.add('fade-out');
    imagesWrapperO.style.backgroundImage = 'url(' + imagesArrayO[currentImageO] + ')';
    imagesWrapperO.classList.remove('fade-out');
}

}



/*----------------Two------------*/
var myCarouselT = document.getElementById('carusel-two');

if (myCarouselT && myCarouselT.hasChildNodes()) {
    var imagesWrapperT = document.getElementById('wrapper-two');
    var prevArrowT = document.getElementById('prev-car-two');
    var nextArrowT = document.getElementById('next-car-two');
    var childNodesT = myCarouselT.childNodes;
    var imagesArrayT = [];

    for (var i = 0; i < childNodesT.length; i++) {
        var currentNodeT = childNodesT[i];
        if (currentNodeT.nodeName === 'IMG') {
            imagesArrayT.push(currentNodeT.src);
            currentNodeT.classList.add('hide');
        }
    }

imagesWrapperT.style.backgroundImage = 'url(' + imagesArrayT[0] + ')';
var currentImageT = 0;
var numberOfImagesT = imagesArrayT.length;

prevArrowT.onclick = function () {
    handleSlideshowArrowTwo('prev-car-two');
};

nextArrowT.onclick = function () {
    handleSlideshowArrowTwo('next-car-two');
};

function handleSlideshowArrowTwo(valt) {
    if (valt === 'prev-car-two') {
        if (currentImageT > 0) {
            currentImageT--;
        } else {
            currentImageT = numberOfImagesT - 1;
        }
    } else if (valt === 'next-car-two') {
        if (currentImageT < numberOfImagesT - 1) {
            currentImageT++;
        } else {
            currentImageT= 0;
        }
    }

    imagesWrapperT.classList.add('fade-out');
    imagesWrapperT.style.backgroundImage = 'url(' + imagesArrayT[currentImageT] + ')';
    imagesWrapperT.classList.remove('fade-out');
}

}



/*----------------Three------------*/
var myCarouselTh = document.getElementById('carusel-three');

if (myCarouselTh && myCarouselTh.hasChildNodes()) {
    var imagesWrapperTh = document.getElementById('wrapper-three');
    var prevArrowTh = document.getElementById('prev-car-three');
    var nextArrowTh = document.getElementById('next-car-three');
    var childNodesTh = myCarouselTh.childNodes;
    var imagesArrayTh = [];

    for (var i = 0; i < childNodesTh.length; i++) {
        var currentNodeTh = childNodesTh[i];
        if (currentNodeTh.nodeName === 'IMG') {
            imagesArrayTh.push(currentNodeTh.src);
            currentNodeTh.classList.add('hide');
        }
    }

imagesWrapperTh.style.backgroundImage = 'url(' + imagesArrayTh[0] + ')';
var currentImageTh = 0;
var numberOfImagesTh = imagesArrayTh.length;

prevArrowTh.onclick = function () {
    handleSlideshowArrowThree('prev-car-three');
};

nextArrowTh.onclick = function () {
    handleSlideshowArrowThree('next-car-three');
};

function handleSlideshowArrowThree(valth) {
    if (valth === 'prev-car-three') {
        if (currentImageTh > 0) {
            currentImageTh--;
        } else {
            currentImageTh = numberOfImagesTh - 1;
        }
    } else if (valth === 'next-car-three') {
        if (currentImageTh < numberOfImagesTh - 1) {
            currentImageTh++;
        } else {
            currentImageTh= 0;
        }
    }

    imagesWrapperTh.classList.add('fade-out');
    imagesWrapperTh.style.backgroundImage = 'url(' + imagesArrayTh[currentImageTh] + ')';
    imagesWrapperTh.classList.remove('fade-out');
}

}



/*----------------Four------------*/
var myCarouselFo = document.getElementById('carusel-four');

if (myCarouselFo && myCarouselFo.hasChildNodes()) {
    var imagesWrapperFo = document.getElementById('wrapper-four');
    var prevArrowFo = document.getElementById('prev-car-four');
    var nextArrowFo = document.getElementById('next-car-four');
    var childNodesFo = myCarouselFo.childNodes;
    var imagesArrayFo = [];

    for (var i = 0; i < childNodesFo.length; i++) {
        var currentNodeFo = childNodesFo[i];
        if (currentNodeFo.nodeName === 'IMG') {
            imagesArrayFo.push(currentNodeFo.src);
            currentNodeFo.classList.add('hide');
        }
    }

imagesWrapperFo.style.backgroundImage = 'url(' + imagesArrayFo[0] + ')';
var currentImageFo = 0;
var numberOfImagesFo = imagesArrayFo.length;

prevArrowFo.onclick = function () {
    handleSlideshowArrowFour('prev-car-four');
};

nextArrowFo.onclick = function () {
    handleSlideshowArrowFour('next-car-four');
};

function handleSlideshowArrowFour(valfo) {
    if (valfo === 'prev-car-four') {
        if (currentImageFo > 0) {
            currentImageFo--;
        } else {
            currentImageFo = numberOfImagesFo - 1;
        }
    } else if (valfo === 'next-car-four') {
        if (currentImageFo < numberOfImagesFo - 1) {
            currentImageFo++;
        } else {
            currentImageFo= 0;
        }
    }

    imagesWrapperFo.classList.add('fade-out');
    imagesWrapperFo.style.backgroundImage = 'url(' + imagesArrayFo[currentImageFo] + ')';
    imagesWrapperFo.classList.remove('fade-out');
}

}




/*----------------Five------------*/
var myCarouselFi = document.getElementById('carusel-five');

if (myCarouselFi && myCarouselFi.hasChildNodes()) {
    var imagesWrapperFi = document.getElementById('wrapper-five');
    var prevArrowFi = document.getElementById('prev-car-five');
    var nextArrowFi = document.getElementById('next-car-five');
    var childNodesFi = myCarouselFi.childNodes;
    var imagesArrayFi = [];

    for (var i = 0; i < childNodesFi.length; i++) {
        var currentNodeFi = childNodesFi[i];
        if (currentNodeFi.nodeName === 'IMG') {
            imagesArrayFi.push(currentNodeFi.src);
            currentNodeFi.classList.add('hide');
        }
    }

imagesWrapperFi.style.backgroundImage = 'url(' + imagesArrayFi[0] + ')';
var currentImageFi = 0;
var numberOfImagesFi = imagesArrayFi.length;

prevArrowFi.onclick = function () {
    handleSlideshowArrowFive('prev-car-five');
};

nextArrowFi.onclick = function () {
    handleSlideshowArrowFive('next-car-five');
};

function handleSlideshowArrowFive(valfi) {
    if (valfi === 'prev-car-five') {
        if (currentImageFi > 0) {
            currentImageFi--;
        } else {
            currentImageFi = numberOfImagesFi - 1;
        }
    } else if (valfi === 'next-car-five') {
        if (currentImageFi < numberOfImagesFi - 1) {
            currentImageFi++;
        } else {
            currentImageFi= 0;
        }
    }

    imagesWrapperFi.classList.add('fade-out');
    imagesWrapperFi.style.backgroundImage = 'url(' + imagesArrayFi[currentImageFi] + ')';
    imagesWrapperFi.classList.remove('fade-out');
}

}



/*----------------Six------------*/
var myCarouselSi = document.getElementById('carusel-six');

if (myCarouselSi && myCarouselSi.hasChildNodes()) {
    var imagesWrapperSi = document.getElementById('wrapper-six');
    var prevArrowSi = document.getElementById('prev-car-six');
    var nextArrowSi = document.getElementById('next-car-six');
    var childNodesSi = myCarouselSi.childNodes;
    var imagesArraySi = [];

    for (var i = 0; i < childNodesSi.length; i++) {
        var currentNodeSi = childNodesSi[i];
        if (currentNodeSi.nodeName === 'IMG') {
            imagesArraySi.push(currentNodeSi.src);
            currentNodeSi.classList.add('hide');
        }
    }

imagesWrapperSi.style.backgroundImage = 'url(' + imagesArraySi[0] + ')';
var currentImageSi = 0;
var numberOfImagesSi = imagesArraySi.length;

prevArrowSi.onclick = function () {
    handleSlideshowArrowSix('prev-car-six');
};

nextArrowSi.onclick = function () {
    handleSlideshowArrowSix('next-car-six');
};

function handleSlideshowArrowSix(valsi) {
    if (valsi === 'prev-car-six') {
        if (currentImageSi > 0) {
            currentImageSi--;
        } else {
            currentImageSi = numberOfImagesSi - 1;
        }
    } else if (valsi === 'next-car-six') {
        if (currentImageSi < numberOfImagesSi - 1) {
            currentImageSi++;
        } else {
            currentImageSi= 0;
        }
    }

    imagesWrapperSi.classList.add('fade-out');
    imagesWrapperSi.style.backgroundImage = 'url(' + imagesArraySi[currentImageSi] + ')';
    imagesWrapperSi.classList.remove('fade-out');
}

}


$(document).ready(function () {

				/*$.ajax({
				url: 'ajax.html',
			})
			.always(function(html) {
				$('#result').html(html);
			});*/





	/*-----------Menu------------*/
	var menu_navigation = $('#main-nav'),
	      $L = 900,
	      //cart_trigger = $('#cart-trigger'),
	      hamburger_icon = $('#hamburger-menu'),
	      cart = $('#cart'),
	      shadow_layer = $('#shadow-layer');

	hamburger_icon.on('click', function () {
	    cart.removeClass('speed-in');
	    toggle_panel_visibility(menu_navigation, shadow_layer, $('body'));
	});

	move_navigation(menu_navigation, $L);

	$(window).on('resize', function () {
	    move_navigation(menu_navigation, $L);
	    if ($(window).width() >= $L && menu_navigation.hasClass('speed-in')) {
	        menu_navigation.removeClass('speed-in');
	        shadow_layer.removeClass('is-visible');
	        $('body').removeClass('overflow-hidden');
	    }
	});



	$(".sec").on('click', function(){
		console.log('dgdfgdf');
	});



	/*----------carusel--------*/
	$('.img1').on('click', function () {

		$('#carusel-one').toggleClass('speed-in');
    //event.stopPropagation();
		//console.log('gdfgdf');


	});


	$('.closem1').on('click', function () {

			$('#carusel-one').removeClass('speed-in');

	});



  $('.img2').on('click', function () {

    $('#carusel-two').toggleClass('speed-in');

  });

  $('.closem2').on('click', function () {

      $('#carusel-two').removeClass('speed-in');

  });


  $('.img3').on('click', function () {

    $('#carusel-three').toggleClass('speed-in');

  });

  $('.closem3').on('click', function () {

      $('#carusel-three').removeClass('speed-in');

  });


  $('.img4').on('click', function () {

    $('#carusel-four').toggleClass('speed-in');

  });

  $('.closem4').on('click', function () {

      $('#carusel-four').removeClass('speed-in');

  });


  $('.img5').on('click', function () {

    $('#carusel-five').toggleClass('speed-in');

  });

  $('.closem5').on('click', function () {

      $('#carusel-five').removeClass('speed-in');

  });



  $('.img6').on('click', function () {

    $('#carusel-six').toggleClass('speed-in');

  });

  $('.closem6').on('click', function () {

      $('#carusel-six').removeClass('speed-in');

  });




});


/*---------------Template-Parse-----------------*/
function get(url) {
return new Promise(function(succeed, fail) {
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.addEventListener("load", function() {
    if (request.status < 400)
      succeed(request.response);
    else
      fail(new Error("Request failed: " + request.statusText));
  });
  request.addEventListener("error", function() {
    fail(new Error("Network error"));
  });
  request.send();
});
}

get("./data/liza.json").then(function(response) {

  var person = JSON.parse(response);
  var arr = [];

  /*for (var i = 0; i < person.length; ++i) {
    var template = document.querySelector('#personTemplate').innerHTML;

    //console.log(template);

    arr.push(template[i]);

    console.log(arr);

    arr.find('img').getAttribute("src");
    arr.find('.new').text(person[i]["category"]);

    var liM = document.createElement('li');
    liM.appendChild("#gallery-items");
  }*/

  for (var i=0; i< person.length; ++i) {
  var $template = $($('#personTemplate').html());

  //console.log($template);

        $template.find('img').attr("src", person[i]["picture"]);
        $template.find('.new').text(person[i]["category"]);

  var liS = $("<li></li>").append($template).appendTo("#gallery-items");
    liS.toggleClass('desIn');
  }

  /*console.log(person);*/
  return person;
}).catch(function(error){
  /*console.log("Error!!!");
  console.log(error);*/
});

/*$('.desIn').on('mouseover', function () {

    $('.desIn').css({background: '#fff'});

});*/


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
}

		/*$(document).ready(function(){

		});*/
/*var tabs = document.getElementById('up');

tabs.addEventListener('click', go);

function go(){
	console.log('fgfgfh');
	this.style.color = "red";
}*/

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
