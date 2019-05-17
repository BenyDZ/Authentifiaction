var octopus = {
    register : function(name, password, role){
        
    const fs = require('fs');
  
    // Data which will write in a file. 
    data = ""+name+"\n"+password+"\n";
  
    // Write data in 'Output.txt' . 
    fs.writeFile(role+'.txt', data, (err) => { 
      
        // In case of a error throw err. 
        if (err) throw err; 
    }) }
}