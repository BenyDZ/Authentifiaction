var OCTOPUS={
        readTextFile: function(D:/PANESS IIHT/COURS/GROUP WORK/Projet 2/Authentifiaction/Save/Utilisateur.txt)
    {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var allText = rawFile.responseText;
                    alert(allText);
                }
            }
        }
        rawFile.send(null);
    }
}
OCTOPUS.readTextFile();