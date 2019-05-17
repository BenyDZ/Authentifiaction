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