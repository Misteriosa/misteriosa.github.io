 //capture scroll any percentage, progress bar
$(window).scroll(function () {
  var winTop = $(window).scrollTop(),
    docHeight = $(document).height(), // Returns height of HTML document
      winHeight = $(window).height();// Returns height of browser viewport

  var scrolled = winTop / (docHeight - winHeight) * 100;
  //console.log('scrolled '+scrolled +', winTop '+winTop +', docHeight '+ docHeight +', winHeight '+ winHeight);
//example: scrolled 0.31690140005568385, winTop 1.7999999523162842, docHeight 869, winHeight 301

  $('.positioned').css('width', scrolled + '%');
});


function center(e){
	//position title of topic in center
	var title= document.getElementsByClassName(e)[0];
		// get elements width
	var width = title.offsetWidth; 
	//console.log('width text '+ width); //137
		// get parents width, center
	var center = title.parentElement.parentElement.offsetWidth / 2; //barra-> positioned(q varia width)-> fixedText
	//console.log(center); //527.5
		// set it in the middle horizontally
	title.style.right = center - width / 2 + 'px';
}
function right(e){
	var title= document.getElementsByClassName(e)[0];
	title.style.right = 0+'px';
	title.style.marginRight= '5vw';
}
center('maintext');
center('footTitle');

if (matchMedia('(min-width: 900px)').matches) {
center('barTitle');
}
/*reload page when window is resized, so that javascr is reloaded with the new width and h of the viewport. location refers to the url*/
window.onresize = function(){ 
	center('maintext');
	center('footTitle');
	right('barTitle');
	// navL disappears with small screen
	document.getElementsByClassName('navL')[0].style.display='none';

	if (matchMedia('(min-width: 900px)').matches) {
	center('barTitle');
	// navL appears with big screen
	document.getElementsByClassName('navL')[0].style.display='block';
}}

/*page transition. 
To do: Treat cases like Command + click (which opens the page in new tab) 
*/
	/*Add event to all links
	Purposely binding the listener on the document object
	so that it intercept anchors added in future*/
	document.addEventListener('click', function(e) {
	  var el = e.target;
	  // Go up in the nodelist until find a node with .href (HTMLAnchorElement)
	  while (el && !el.href) {
	    el = el.parentNode;
	  }
	  if (el) {
	    //e.preventDefault();
	    var parts = el.href.split("#");
		var result = parts[parts.length - 1]; // Or parts.pop();

		$('#'+result).addClass('fade-out');  
		setTimeout(function(){   //setTimeout necessary cus adding and removing class wont work inside same function
			$('#'+result).removeClass('fade-out')
		},1); 
	    return;
	  }
	});

var mobileMenu=document.getElementById('navMobile');
/*when checkbox is clicked, navMobile menu appears*/
	document.getElementById('toggle').addEventListener('change', function(){
		mobileMenu.classList.add('navMobileClass');
		document.body.style.overflow = "hidden"; 
	});
/*when x is clicked, navMobile menu disappears*/
	document.getElementById('close').addEventListener('click', function(){
		mobileMenu.classList.remove('navMobileClass');
		document.body.style.overflow = "auto"; 
	});
/*when link of mobile version of menu is clicked, menu closes and shows section*/
	var listItems= mobileMenu.firstElementChild.children;
	for (x in listItems) {
		listItems[x].firstElementChild.addEventListener('click', function(){
			/*close menu*/
			mobileMenu.classList.remove('navMobileClass');
			document.body.style.overflow = "auto"; 

			var link = listItems[i].firstElementChild.getAttribute("href");
	    	window.location.href = link;
		});
	}