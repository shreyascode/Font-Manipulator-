difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLaoded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
console.log('PoseNet is Initialized!');
}
function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX - rightWristX);
        onsole.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}
function draw(){
    background('#6c91c2');
    document.getElementById("font_size").innerHTML="Font size of the text will be = " + difference +"px";
    textSize(difference);
fill("#FFE787");
text('Peter',50,400);
}