void setup(){
  let PImage = nail[];
　　　　let frame = 0;
  nail = new PImage[44];
  size(640,480);
  print('test page');
  for(int i =0; i<44; i++)
    nail[i] =loadImage("11-image_"+i+".jpg");
  
}

void draw(){
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
