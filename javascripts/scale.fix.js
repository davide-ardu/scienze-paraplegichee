fixScale = function(doc) {

	var addEvent = 'addEventListener',
	    type = 'gesturestart',
	    qsa = 'querySelectorAll',
	    scales = [1, 1],
	    meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

	function fix() {
		meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
		doc.removeEventListener(type, fix, true);
	}

	if ((meta = meta[meta.length - 1]) && addEvent in doc) {
		fix();
		scales = [.25, 1.6];
		doc[addEvent](type, fix, true);
	}

};


function funmenu1(){
	
	document.getElementById('uppertable1').style.backgroundColor = '#C0C7C2';
	onmouseout = document.getElementById('uppertable1').style.backgroundColor = '#C8D4CC';
}


function funmenu2(){
	
	document.getElementById('uppertable2').style.backgroundColor = '#C0C7C2';
	onmouseout = document.getElementById('uppertable2').style.backgroundColor = '#C8D4CC';
}


function funmenu3(){
	
	document.getElementById('uppertable3').style.backgroundColor = '#C0C7C2';
	onmouseout = document.getElementById('uppertable3').style.backgroundColor = '#C8D4CC';
}
