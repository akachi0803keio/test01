var PImage = nail[];
var frame = 0;

function setup() {
  size(640,480);
  for(int i =0; i<44; i++)
    nail[i] =loadImage("11-image_"+i+".jpg");
}

function draw() {
  image(nail[frame], 0, 0);
  if(mousePressed){
    frame=frame+1;
  }else{
    frame =frame-1;
  }
  
  if(frame <0){
    frame =0;
  }
    if(frame >43){
      frame =43;
  }
}
