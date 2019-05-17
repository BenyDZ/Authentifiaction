var octopus = {
    register : function(name, password, role){
        var txt = new ActiveXObject("Scripting.FileSystemObject");
        var s = txt.CreateTextFile("D:/11.txt", true);
        s.WriteLine(''+name);
        s.WriteLine(''+password);
        s.WriteLine(''+role);
        s.Close();
    }
}