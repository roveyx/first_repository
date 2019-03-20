var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length ; i++){
	acc[i].onclick=fonction(){
		this.calssList.toggle("active")
		var panel = this.netElementsSibling;
		if(paner.style.display == 'block'){
			paner.style.display = "none"
		}else{
			paner.style.display = 'block'
		}
	}
}

