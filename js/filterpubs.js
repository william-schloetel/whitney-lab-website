// filterpubs

var options = {
    valueNames: [ 'author','year', 'journal', 'title','category']
};
var pubList = new List('allpubs', options);
var filterState = false;

// initial heading tweaks
$(document).ready(function () {
	$("#filter-none").addClass('selected')
	$("#2004pre").show();
	$("#1998").hide();
	
});

// hide year table of contents when searching
$("#pubsearch").one("keydown", function ()  {
    $(".yearHeading,.toc,#jumpTo").hide();
});

// and when sorting by author or title
$("#author,#title").click(function() {
	$(".yearHeading,.toc,#jumpTo").hide();
});


// show year table of contents while sorting by year, also tweak the labels
$("#year").click(function() {
	if (filterState == false && ($('#pubsearch').val().length == 0)) {
	$(".yearHeading,.toc,#jumpTo").show();
	}
	if ($(this).hasClass('asc')) {
		$("#2004pre").hide();
		$("#1998").show();
	} else { 
		$("#2004pre").show();
		$("#1998").hide();
	};	
});
	
// category filters

//// uncomment this to add a new category (replace "mycategory" in 2 places below with the shorthand name of your category)
//$('#filter-mycategory').click(function() {
//  $(".selected").removeClass("selected")
//	$(this).addClass('selected');
//  $(".yearHeading,.toc,#jumpTo").hide();
//	filterState=true;
//	pubList.filter(function(item) {
//    if (item.values().category.toLowerCase().indexOf("mycategory") >= 0) {
//      return true;
//    } else {
//      return false;
//    }
//  });
//  return false;
//});

// crowding
$('#filter-crowding').click(function() {	
	$(".selected").removeClass("selected")
	$(this).addClass('selected');
	$(".yearHeading,.toc,#jumpTo").hide();
	filterState=true;
 	 pubList.filter(function(item) {
    if (item.values().category.toLowerCase().indexOf("crowding") >= 0) {
      return true;
    } else {
      return false;
    }
  });
  return false; 
});

// motion
$('#filter-motion').click(function() {
  	$(".selected").removeClass("selected")
	$(this).addClass('selected');
	$(".yearHeading,.toc,#jumpTo").hide();
	filterState=true;
	pubList.filter(function(item) {
    if (item.values().category.toLowerCase().indexOf("motion") >= 0) {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

// ensemble
$('#filter-ensemble').click(function() {
  	$(".selected").removeClass("selected")
	$(this).addClass('selected');
	$(".yearHeading,.toc,#jumpTo").hide();
	filterState=true;
	pubList.filter(function(item) {
    if (item.values().category.toLowerCase().indexOf("ensemble") >= 0) {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

// no filter
$('#filter-none').click(function() {
  $(".selected").removeClass("selected")
  $(this).addClass('selected');
  $(".yearHeading,.toc,#jumpTo").hide();
  pubList.filter();
  filterState=false;
  return false;
});

// serial
$('#filter-serial').click(function() {	
	$(".selected").removeClass("selected")
	$(this).addClass('selected');
	$(".yearHeading,.toc,#jumpTo").hide();
	filterState=true;
 	 pubList.filter(function(item) {
    if (item.values().category.toLowerCase().indexOf("serial") >= 0) {
      return true;
    } else {
      return false;
    }
  });
  return false; 
});

// motor
$('#filter-motor').click(function() {	
	$(".selected").removeClass("selected")
	$(this).addClass('selected');
	$(".yearHeading,.toc,#jumpTo").hide();
	filterState=true;
 	 pubList.filter(function(item) {
    if (item.values().category.toLowerCase().indexOf("motor") >= 0) {
      return true;
    } else {
      return false;
    }
  });
  return false; 
});

// dev
$('#filter-dev').click(function() {	
	$(".selected").removeClass("selected")
	$(this).addClass('selected');
	$(".yearHeading,.toc,#jumpTo").hide();
	filterState=true;
 	 pubList.filter(function(item) {
    if (item.values().category.toLowerCase().indexOf("dev") >= 0) {
      return true;
    } else {
      return false;
    }
  });
  return false; 
});

// echo
$('#filter-echo').click(function() {	
	$(".selected").removeClass("selected")
	$(this).addClass('selected');
	$(".yearHeading,.toc,#jumpTo").hide();
	filterState=true;
 	 pubList.filter(function(item) {
    if (item.values().category.toLowerCase().indexOf("echo") >= 0) {
      return true;
    } else {
      return false;
    }
  });
  return false; 
});

// attention
$('#filter-attention').click(function() {	
	$(".selected").removeClass("selected")
	$(this).addClass('selected');
	$(".yearHeading,.toc,#jumpTo").hide();
	filterState=true;
 	 pubList.filter(function(item) {
    if (item.values().category.toLowerCase().indexOf("attention") >= 0) {
      return true;
    } else {
      return false;
    }
  });
  return false; 
});

// face
$('#filter-face').click(function() {	
	$(".selected").removeClass("selected")
	$(this).addClass('selected');
	$(".yearHeading,.toc,#jumpTo").hide();
	filterState=true;
 	 pubList.filter(function(item) {
    if (item.values().category.toLowerCase().indexOf("face") >= 0) {
      return true;
    } else {
      return false;
    }
  });
  return false; 
});

// localization
$('#filter-localization').click(function() {	
	$(".selected").removeClass("selected")
	$(this).addClass('selected');
	$(".yearHeading,.toc,#jumpTo").hide();
	filterState=true;
 	 pubList.filter(function(item) {
    if (item.values().category.toLowerCase().indexOf("localization") >= 0) {
      return true;
    } else {
      return false;
    }
  });
  return false; 
});


// rivalry
$('#filter-rival').click(function() {	
	$(".selected").removeClass("selected")
	$(this).addClass('selected');
	$(".yearHeading,.toc,#jumpTo").hide();
	filterState=true;
 	 pubList.filter(function(item) {
    if (item.values().category.toLowerCase().indexOf("rival") >= 0) {
      return true;
    } else {
      return false;
    }
  });
  return false; 
});

// crossmodal
$('#filter-cross').click(function() {	
	$(".selected").removeClass("selected")
	$(this).addClass('selected');
	$(".yearHeading,.toc,#jumpTo").hide();
	filterState=true;
 	 pubList.filter(function(item) {
    if (item.values().category.toLowerCase().indexOf("cross") >= 0) {
      return true;
    } else {
      return false;
    }
  });
  return false; 
});


//audition
$('#filter-aud').click(function() {	
	$(".selected").removeClass("selected")
	$(this).addClass('selected');
	$(".yearHeading,.toc,#jumpTo").hide();
	filterState=true;
 	 pubList.filter(function(item) {
    if (item.values().category.toLowerCase().indexOf("aud") >= 0) {
      return true;
    } else {
      return false;
    }
  });
  return false; 
});


// memory
$('#filter-mem').click(function() {	
	$(".selected").removeClass("selected")
	$(this).addClass('selected');
	$(".yearHeading,.toc,#jumpTo").hide();
	filterState=true;
 	 pubList.filter(function(item) {
    if (item.values().category.toLowerCase().indexOf("mem") >= 0) {
      return true;
    } else {
      return false;
    }
  });
  return false; 
});