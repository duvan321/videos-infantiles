window.onload=inicio;
  var videos=["Los Pinguinos de Madagascar_ Escenas Graciosas.mp4","El Pájaro Loco _ Gallina carpintera _ Episodio Completo.mp4","Toy Story Toons_ Vacaciones en Hawai.mp4","Eso es asqueroso _ Clip de Los Pingüinos de Madagascar.mp4"];
   var vid;
  var videoActual=0; 
function inicio(){
    vid=document.querySelector("video");
    vid.src=`videos/${videos[videoActual]}`;
}