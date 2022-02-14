function preload(){

}
function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,550);
canvas.position(600,150);

Posenet=ml5.poseNet("video",modelLoaded);
Posenet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log(modelLoded);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}
function draw(){
    background("#FA8072");
   }