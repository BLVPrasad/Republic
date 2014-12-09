App = {
	load: function() {
		jo.load();
		
		// grab the HTML for our about box
		var about = joDOM.get("about").innerHTML;
		
		// this is a more complex UI with a nav bar and a toolbar
		this.scn = new joScreen(
			new joContainer([new joTitle("Republic <br> <font size='2' color = 'rgb(152,72,7)'> People Empowered</font>"),
								//new joTitle("<font size='2' color = 'rgb(152,72,7)'> People Empowered</font>").setStyle({background : "rgb(250,191,144)", font: "10px"}),
								this.nav = new joNavbar(),
								new joFlexcol([
									
									this.stack = new joStackScroller()
								]),
				this.toolbar = new joToolbar("<font size='1'color = 'gray'>Copyright &copy; 2011 Hexaware Technologies Ltd.</font>")
			]).setStyle({position: "absolute", top: "0", left: "0", bottom: "0", right: "0"})
			
		);
		
		this.nav.setStack(this.stack);
		
		joCache.set("about", function() {
			var card = new joCard([
			
						new joHTML("<br><center><font size='1'color = 'gray'><b>By logging on, you agree to the <a href=''><font color='rgb(85,142,213)'>Terms of service </font></a></b></font></center>"),	
			
						new joGroup([
						
								//new joCaption("<span style='text-align:center'><font size='1'color = 'gray'><b>By logging on, you agree to the <a href=''> Terms of service</a></b></font></span>"),
								new joFlexrow([
									new joFlexcol(new joLabel("<b>User ID</b>")).setStyle({width:"30%"}),
									new joFlexcol(new joInput()).setStyle({width:"70%"})
									]),
								new joFlexrow("<br>"),	
								new joFlexrow([
									new joFlexcol(new joLabel("<b>Password</b>")).setStyle({width:"30%"}),
									new joFlexcol(new joPasswordInput()).setStyle({width:"70%"})
									]),
								new joFlexrow("<br>"),
								new joButton("<b>LogOn</b>").selectEvent.subscribe(function() {
        						
								
										this.stack.push(joCache.get("home"));
								
								})
								])
		
									
							]).setTitle("<b>Log On</b>")	
			
			return card;
		});
					
		this.stack.push(joCache.get("home"));
		
		
		
		//joGesture.backEvent.subscribe(this.stack.pop, this.stack);
	}
};
