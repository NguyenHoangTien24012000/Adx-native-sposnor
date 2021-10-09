function renderBox(){
	var image='',title='',brand='',domain='',description='';

	this.css=`%%css%%`;
	this.html=`%%html%%`;
	document.getElementById('boxid').innerHTML = `<style>${this.css}</style>${this.html}`;
}

renderBox();