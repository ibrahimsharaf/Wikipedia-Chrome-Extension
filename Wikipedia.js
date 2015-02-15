function save_options() {
		
	var select1 = document.getElementById("language");
		//save action from options pages	
	var language = select1.children[select1.selectedIndex].value;
		//select value from <select>
	localStorage["language"] = language;
		close();
		//close the page after 
}
	
window.onload = function(){document.querySelector('input[value="Save"]').onclick=save_options;}
     // querySelectors saves the chosen language
	 
	 
/*
	// message to confirm 
function save_options() {
  if (confirm("Close Window?")) {
    close();
  }
}
*/
