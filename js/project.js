window.onload = function(){
	var nav = document.getElementById("nav");
	var li = nav.getElementsByTagName("li");
	var list = document.getElementById("list");
	var ul = list.getElementsByTagName("ul");
	for(var i=0;i<li.length;i++){
		li[i].index = i;
		li[i].onclick = function(){
			for(var j=0;j<li.length;j++){
				li[j].className = "";
				ul[j].className = "img";
			}
			this.className = "active";
			ul[this.index].className = "img show";
		}
	}
}