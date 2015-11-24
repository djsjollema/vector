window.addEventListener("load",function(){ 
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    
    var vector = new Vector(1,1);
    console.log(vector.dx, vector.dy, vector.r, vector.hoek);
    
    vector.dx = 2;
    console.log(vector.dx, vector.dy, vector.r, vector.hoek);
    
    vector.dy = 2;
    console.log(vector.dx, vector.dy, vector.r, vector.hoek);
    
    vector.r = 1;
    console.log(vector.dx, vector.dy, vector.r, vector.hoek);
    
    vector.hoek = Math.PI;
    console.log(vector.dx, vector.dy, vector.r, vector.hoek);
})
