var view = {
    getUserInfo : function(){
        var name = document.getElementById('name').value;
        var password = document.getElementById('password').value;
        var role = document.getElementById('section');
        var userRole =  role.options[role.selectedIndex].text;
        octopus.register(name,password,userRole)
    }
}