function process(){
    var person = document.getElementById("nameBox").value ; 
    var check = parseInt(document.getElementById("checkBox").value) ; 
    
    if (check > 10 ) {
    
      document.getElementById("content").innerHTML= 
      
      `<h4>Dear ${person}, Happy Travel,you have explored a lot  </h4> `;
    }
    else {
    
       document.getElementById("content").innerHTML= 
      `<h4> Dear, ${person} "Safe Travel more to explore" </h4>`;
    }
  
  }