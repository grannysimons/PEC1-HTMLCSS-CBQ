var img = new Array(4);
img[0] = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Diesel_Railcar_of_Peru_04.jpg/1280px-Diesel_Railcar_of_Peru_04.jpg";
img[1] = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Machu_Picchu%2C_Per%C3%BA%2C_2015-07-30%2C_DD_44.JPG/1280px-Machu_Picchu%2C_Per%C3%BA%2C_2015-07-30%2C_DD_44.JPG";
img[2] = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Machu_Picchu%2C_Per%C3%BA%2C_2015-07-30%2C_DD_58.JPG/1280px-Machu_Picchu%2C_Per%C3%BA%2C_2015-07-30%2C_DD_58.JPG";
img[3] = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Machu_Picchu%2C_Per%C3%BA%2C_2015-07-30%2C_DD_51.JPG/1280px-Machu_Picchu%2C_Per%C3%BA%2C_2015-07-30%2C_DD_51.JPG";
var i = 0;
function cambiarImagen() {
    if (i == 3) i = 0;
    else i++;
    document.getElementById("changeImagen").src = img[i];
    setTimeout("cambiarImagen()", 3000);
}

//# sourceMappingURL=presentacion.816e7b21.js.map
