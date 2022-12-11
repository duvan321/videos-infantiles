window.onload=inicio;
  var videos=["Los Pinguinos de Madagascar_ Escenas Graciosas.mp4","Superlibro - El hijo Pródigo.mp4","Superlibro - Eliseo y los Sirio.mp4","Superlibro - Jonás.mp4","Superlibro - La Primera Navidad.mp4","Superlibro - Los Milagros de Jesús.mp4","Superlibro - En el Principio.mp4"];
  var vid;
  var videoActual=0; 
function inicio(){
    vid=document.querySelector("video");
    vid.src=`videos/${videos[videoActual]}`;
}