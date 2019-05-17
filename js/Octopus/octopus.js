<<<<<<< HEAD
var OCTOPUS={
    readTextFile: function(){
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET","D:/PANESS IIHT/COURS/GROUP WORK/Projet 2/Authentifiaction/Save/Utilisateur.txt","true");
        rawFile.onreadystatechange = function (){
            if(rawFile.readyState == 4 && rawFile.status == 200 ){
                document.getElementById("Name").innerHTML = rawFile.responseText;
                document.getElementById("password").innerHTML = rawFile.responseText;
            } 
        };
        rawFile.send();
        console.log(rawFile);
    }
}
OCTOPUS.readTextFile();
=======
var octopus = {
    readFile : function() {
        var path="C:/Users/user/Desktop/Authenfication/Save/save.txt";
        var fso = new ActiveXObject('Scripting.FileSystemObject');
        var text = []
        iStream=fso.OpenTextFile(path, 1, false);
        while(!iStream.AtEndOfStream) {
            var line=iStream.ReadLine();
            text.push(line);
        }
         
        iStream.Close();

        return text
    },
    register : function(name, password, role){
        var text = octopus.readFile();
        var txt = new ActiveXObject("Scripting.FileSystemObject");
        var s = txt.CreateTextFile("C:/Users/user/Desktop/Authenfication/Save/save.txt", true);
        for (compteur = 0; compteur < text.length; compteur++){
            s.WriteLine(text[compteur]);
        }
        s.WriteLine(name+" "+password+" "+role);
        s.Close();
    },
    // function qui permet d'afficher le nom de l'utilisateur avec un text de bienvenue
    DisplayName: function(){
        var name = document.getElementById("Name");
        // var password = document.getElementById("Password");
        nameContent = name.value;
        nameContent = "Hi there, " + nameContent + "!"
        // var textDisplay= document.getElementById("displayText")
        // textDisplay.innerHTML= "Test Worked";
        var textDisplay2= document.getElementById("displayText2")
        textDisplay.innerHTML= "Welcome to our page. Excellent journey.";
        
    }
}
>>>>>>> 46a91b105eb8b95f4c6988d2e0b4bde2fdcb33ae

  
   
   
  
  
  



   