joCache.set("home", function() {
	
//var title = ['Compensation','Leave','Internal Jobs'];


var menu = new joMenu([
			    { title: "<img src='app/images/fi.png'/> Compensation <span style='float:right'> > </span>", id: "compensation",icon: "app/images/fi.png" },
			    { title: "Leave <span style='float:right'> > </span>", id: "leave",icon: "app/images/right_arrow.png" },
			    { title: "Internal Jobs <span style='float:right'> > </span>", id: "jobs",icon: "app/images/right_arrow.png" },
				{ title: "", id: "" }
			]);
// simple inline function event handler
menu.selectEvent.subscribe(function(id) {
    switch (id) {
    case "compensation":
        App.stack.push(joCache.get(id));
        break;
    case "leave":
		App.stack.push(joCache.get(id));
        break;
    case "jobs":
		App.scn.alert("jobs");
		
		App.stack.push(joCache.get(id));
        //stack.push(jobCard);
        break;
    }
});

var homeCard = new joCard([
				[menu], new joFlexrow([]), new joFlexrow([])
		   ])
		   homeCard.setTitle('<b>Home</b>');
		   return homeCard;
		   
		   
});



/************************************************     Compensation  ***************************************************/


joCache.set("compensation", function() {

var menu = new joMenu([
    { title: "PaySlip <span style='float:right'> > </span>", id: "payslip" },
   	{ title: "", id: "" }
]);

menu.selectEvent.subscribe(function(id) {
    switch (id) {
    case "payslip":
		        		
		App.stack.push(joCache.get(id));
        break;

	}
});

var compensationCard = new joCard([ menu ]) 
		   compensationCard.setTitle('<b>Compensation</b>');
		   return compensationCard;		   
	  
});

/********************************************      Payslip   *************************************************************/



joCache.set("payslip", function() {

var menu = new joMenu([
   // { title: "PaySlip", id: "ps" },
   	{ title: "", id: "" }
]);

menu.selectEvent.subscribe(function(id) {
    switch (id) {
    case "ps":
	
        App.stack.push(joCache.get(id));
        break;
   
	
	
	}
});

var payslipCard = new joCard([
				new joGroup([
					new joFlexrow([
						new joFlexcol([new joLabel(['Month'])]),
						new joFlexcol([new joSelect(['January','February','March','April','May','June','July','August','September','October','November','December'])])
					]),
					new joFlexrow("<br>"),	
					new joFlexrow([
						new joFlexcol([new joLabel(['Year'])]),
						new joFlexcol([new joSelect(['2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011'])])
					]),
					new joFlexrow("<br>"),	
					new joButton("<b>Get Pay slip </b>").selectEvent.subscribe(function() {
       						 

						App.stack.push(joCache.get("exactPayslip"));


    				})
				])
			])
		   payslipCard.setTitle('<b>PaySlip</b>');
		   return payslipCard;		   
	  
});

/********************************************      select payslip  *************************************************************/


joCache.set("exactPayslip", function() {

var menu = new joMenu([
   // { title: "PaySlip", id: "ps" },
   	{ title: "", id: "" }
]);

menu.selectEvent.subscribe(function(id) {
    switch (id) {
    case "ps":
	    App.stack.push(joCache.get(id));
        break;
  	}
});

var payslipCard = new joCard([

				new joHTML("<br><center><b><font size='2' color = 'rgb(192,0,0)'>PaySlip for the Month of Jan 2011 </font></b></center>"),
				new joGroup([
					new joExpando([
					    new joExpandoTitle("Employee Information"),
					    new joExpandoContent([
					        new joFlexrow([
								new joFlexcol([new joLabel("Emp No")]),
								new joFlexcol([new joLabel("<span style='color:rgb(192,0,0);text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);'>19119</span>")])
					        ]),
							new joFlexrow([
								new joFlexcol([new joLabel("Emp Name")]),
								new joFlexcol([new joLabel("<span style='color:rgb(192,0,0);text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);'>Prasad</span>")])
					        ]),
							new joFlexrow([
								new joFlexcol([new joLabel("Bank Name")]),
								new joFlexcol([new joLabel("<span style='color:rgb(192,0,0);text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);'>IDBI</span>")])
					        ]),
							new joFlexrow([
								new joFlexcol([new joLabel("Acc No")]),
								new joFlexcol([new joLabel("<span style='color:rgb(192,0,0);text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);'>11112222333</span>")])
					        ]),
							new joFlexrow([
								new joFlexcol([new joLabel("PF No")]),
								new joFlexcol([new joLabel("<span style='color:rgb(192,0,0);text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);'>19119</span>")])
					        ]),
							new joFlexrow([
								new joFlexcol([new joLabel("Grade")]),
								new joFlexcol([new joLabel("<span style='color:rgb(192,0,0);text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);'>G3</span>")])
					        ]),
							new joFlexrow([
								new joFlexcol([new joLabel("Pan no")]),
								new joFlexcol([new joLabel("<span style='color:rgb(192,0,0);text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);'>ADF2323232</span>")])
					        ]),
							new joFlexrow([
								new joFlexcol([new joLabel("Location")]),
								new joFlexcol([new joLabel("<span style='color:rgb(192,0,0);text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);'>Chennai</span>")])
					        ]),
							new joFlexrow([
								new joFlexcol([new joLabel("Department")]),
								new joFlexcol([new joLabel("<span style='color:rgb(192,0,0);text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);'>Innovations</span>")])
					        ]),
							new joFlexrow([
								new joFlexcol([new joLabel("Designation")]),
								new joFlexcol([new joLabel("<span style='color:rgb(192,0,0);text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);'>S/w Engineer</span>")])
					        ]),
							new joFlexrow([
								new joFlexcol([new joLabel("Total days")]),
								new joFlexcol([new joLabel("<span style='color:rgb(192,0,0);text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);'>31</span>")])
					        ]),
							new joFlexrow([
								new joFlexcol([new joLabel("LOP")]),
								new joFlexcol([new joLabel("<span style='color:rgb(192,0,0);text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);'>0</span>")])
					        ]),
							new joFlexrow([
								new joFlexcol([new joLabel("Total work days")]),
								new joFlexcol([new joLabel("<span style='color:rgb(192,0,0);text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);'>31</span>")])
					        ])
							
					    ])
					]),
					new joExpando([
					    new joExpandoTitle("Earnings"),
					    new joExpandoContent([
					    	new joFlexrow([
								new joFlexcol([new joLabel("Basic Pay")]),
								new joFlexcol([new joLabel("<span style='color:rgb(192,0,0);text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);'>8000</span>")])
					        ]),
							new joFlexrow([
								new joFlexcol([new joLabel("Special Allowance")]),
								new joFlexcol([new joLabel("<span style='color:rgb(192,0,0);text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);'>5000</span>")])
					        ])    
					        
					    ])
					]),
					new joExpando([
					    new joExpandoTitle("Deductions"),
					    new joExpandoContent([
					       new joFlexrow([
								new joFlexcol([new joLabel("Provident Fund")]),
								new joFlexcol([new joLabel("<span style='color:rgb(192,0,0);text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);'> Rs. 3,560</span>")])
					        ]),
							new joFlexrow([
								new joFlexcol([new joLabel("Professional Tax")]),
								new joFlexcol([new joLabel("<span style='color:rgb(192,0,0);text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);'> Rs. 183</span>")])
					        ]),
							new joFlexrow([
								new joFlexcol([new joLabel("Income Tax")]),
								new joFlexcol([new joLabel("<span style='color:rgb(192,0,0);text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);'> Rs. 6,902</span>")])
					        ]),
							new joFlexrow([
								new joFlexcol([new joLabel("Total deductions")]),
								new joFlexcol([new joLabel("<span style='color:rgb(192,0,0);text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);'> Rs. 10,645 </span>")])
					        ])
							
					        
					    ])
					]),
					new joExpando([
					    new joExpandoTitle("NetPay"),
					    new joExpandoContent([
					       new joFlexrow([
								new joFlexcol([new joLabel("Net ")]),
								new joFlexcol([new joLabel("<span style='color:rgb(192,0,0);text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);'>Rs. 20,645</span>")])
					        ])
					        
					    ])
					]),
					

				
					new joFlexrow("<br>")
					
				])
			])
		   payslipCard.setTitle('<b>PaySlip</b>');
		   return payslipCard;		   
	  
});


/********************************************      Leave  *************************************************************/

joCache.set("leave", function() {

var menu =  new joMenu([
   { title: "Leave Balance <span style='float:right'> > </span>",id : "leaveBalance", icon: "../../app/images/right_arrow.png"},
   { title: "Apply Leave <span style='float:right'> > </span>",icon: "../../app/images/right_arrow.png", id : "applyLeave" },
   { title: "Approve Leave <span style='float:right'> > </span>",icon: "../../app/images/right_arrow.png", id : "approveLeave" },
   { title: "", id: "" }
]);


menu.selectEvent.subscribe(function(id) {
    switch (id) {
    case "leaveBalance":
		App.stack.push(joCache.get(id));
       	break;
   case "applyLeave":
		App.stack.push(joCache.get(id));
       	break;
	case "approveLeave":
		App.stack.push(joCache.get(id));
       	break;	
	
	}
});

var leaveCard = new joCard([  menu ])
		   leaveCard.setTitle('<b>Leave</b>');
		   return leaveCard;		   
	  
});


/********************************************      Leave Balance  *************************************************************/



joCache.set("leaveBalance", function() {
	
	
var leaveBalanceCard = new joCard([ 
						new joGroup([
							new joFlexrow([
							new joFlexcol([new joLabel("Earned Leave")]),
							new joFlexcol([new joLabel("<span style='color:rgb(192,0,0);text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);'> 20 </span>")])
					        ]),
							new joFlexrow([
								new joFlexcol([new joLabel("Sick Leave")]),
								new joFlexcol([new joLabel("<span style='color:rgb(192,0,0);text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);'>10</span>")])
					        ]),
							new joFlexrow([
								new joFlexcol([new joLabel("Loss Of Pay")]),
								new joFlexcol([new joLabel("<span style='color:rgb(192,0,0);text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);'> 0</span>")])
					        ]),
							new joFlexrow([
								new joFlexcol([new joLabel("Other")]),
								new joFlexcol([new joLabel("<span style='color:rgb(192,0,0);text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);'> 0 </span>")])
					        ]),
							new joButton("Apply Leave").selectEvent.subscribe(function() {
								App.stack.push(joCache.get("applyLeave"));
		    				}) 
						
					  ])
					])
		   leaveBalanceCard.setTitle('<b>Leave Balance</b>');
		   return leaveBalanceCard;		
		   
		   
	App.stack.push(joCache.get("leaveBalanceCard"));	   
		      
	  
});


/********************************************   Apply   Leave  *************************************************************/



joCache.set("applyLeave", function() {
	
	
	
var date = "<table><tr><td><input type='date'></td></tr> </table>";  	


var applyLeaveCard = new joCard([
						new joGroup([
							new joFlexrow([
								new joFlexcol([new joLabel("Leave Type")]),
								new joFlexcol([new joSelect(['Earned Leave','Sick Leave','Loss Of Pay','Other'])])
							]),
							new joFlexrow([
								new joFlexcol([new joLabel("From Date")]),
								new joFlexcol([
									new joInput([    ]).setStyle({width:"75%"}), 
									new joButton("Get date ").selectEvent.subscribe(function() {
       										
       										$(function(){
       										
       										alert("inside fn2");
	     									   $("#date").datepicker();
	  										});
       										
       										
       										
		    						})
								])	
						    ]),
							new joFlexrow([
								new joFlexcol([new joLabel("To Date")]),
								new joFlexcol([new joInput([    ]).setStyle({width:"68%"})])
						    ]),
							new joFlexrow([
								new joFlexcol([new joLabel("Reason")]),
								new joFlexcol([new joTextarea().setStyle({width:"70%"})])
						    ]),
							new joButton("Submit").selectEvent.subscribe(function() {
       							App.stack.push(joCache.get("sent"));
		    				})						
					  ])
					])
applyLeaveCard.setTitle('<b>Leave Balance</b>');
return applyLeaveCard;		
		   
App.stack.push(joCache.get("applyLeaveCard"));	   
		      
	  
});

/********************************************   leave sent    *************************************************************/



joCache.set("sent", function() {
	
var leaveSentCard = new joCard([
						new joGroup([
							new joHTML("Your leave sanction is waiting for manager's approval")
						
						])
					])
leaveSentCard.setTitle('<b>Leave Sent</b>');
return leaveSentCard;		
		   
App.stack.push(joCache.get("leaveSentCard"));	   
		      
	  
});


/********************************************    leave  approved   *************************************************************/



joCache.set("approveLeave", function() {
	
var leaveApprovedCard = new joCard([
						new joGroup([
							//new joHTML("</b>Your leave is approved </b>")
							
							new joFlexrow([
								new joFlexcol([new joLabel("Leave Approve/reject ")]),
								
								new joFlexcol(new joToggle(false).setLabels("Deny", "Approve").changeEvent.subscribe(function(){}))
							]),
							new joFlexrow([
								new joFlexcol([new joLabel("Leave Approve/reject ")]),
								new joFlexcol(new joToggle(false).setLabels("Deny", "Approve").changeEvent.subscribe(function(){}))
							]),
							new joFlexrow("<br>"),	
							new joFlexrow([new joButton("Submit").selectEvent.subscribe(function() {
								App.stack.push(joCache.get(""));
		    					}) 
							])
						])
					])
leaveApprovedCard.setTitle('<b>Approval</b>');
return leaveApprovedCard;		
		   
App.stack.push(joCache.get("leaveApprovedCard"));	   
		      
	  
});

/********************************************   jQuery date    *************************************************************/
 
 
 $(function(){
	        $("#date").datepicker();
	  });
