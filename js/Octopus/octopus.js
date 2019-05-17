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
    }
}