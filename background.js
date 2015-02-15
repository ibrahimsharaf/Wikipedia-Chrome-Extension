chrome.omnibox.onInputEntered.addListener(function(text) {
		
	var language = localStorage["language"];
	     //  to get language value after user selection  from options.html page
		
	var proto="https://";
	      // https "Hypertext Transfer Protocol Secure":for secure communication over a computer network
				
		if (language ==null)
               // if condition to set English as a default language if user does not select any language 	
		{
			chrome.tabs.update({url: proto + "en.wikipedia.org/w/index.php?search=" + text});		
		}
		else{
		//open in new tab
	//chrome.tabs.create({url: proto + language + ".wikipedia.org/w/index.php?search=" + text});
		// open in same tab
	chrome.tabs.update({url: proto + language + ".wikipedia.org/w/index.php?search=" + text});
			}
});
