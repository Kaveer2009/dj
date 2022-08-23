leftWristX = 0;
leftWristY = 0;
song = "";
song2 = "";
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;


function preload(){
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("POSENET IS INITIALIZED !!!!!!!");
}

function draw(){
    image(video,0,0, 600, 500)
    function gotPoses(results) {
        if (results.length > 0) {
            console.log(results);
            leftWristX = results[0].pose.leftWrist.x;
            leftWristY = results[0].pose.leftWrist.y;
            rightWristX = results[0].pose.rightWrist.x;
            rightWristY = results[0].pose.rightWrist.y;
    
            console.log("left wrist x : "+leftWristX+ ", left wrist y : "+leftWristY+", right wrist x : "+rightWristX+", right wrist y : "+rightWristY);
            scoreLeftWrist = results[0].pose.keypoints[9].score;
            console.log(scoreLeftWrist);
            scoreRightWrist = results[0].pose.keypoints[10].score;
            console.log(scoreRightWrist);
        }
        
    
    }
}