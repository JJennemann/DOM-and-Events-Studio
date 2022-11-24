// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
const takeOff = document.getElementById("takeoff");
const flightStatus = document.getElementById("flightStatus");
const shuttleBackground = document.getElementById("shuttleBackground");
const shuttleHeight = document.getElementById("spaceShuttleHeight");

const land = document.getElementById("landing");

const abort = document.getElementById("missionAbort");

const upClick = document.getElementById("up");
const downClick = document.getElementById("down");
const rightClick = document.getElementById("right");
const leftClick = document.getElementById("left");
const rocketPosition = document.getElementById("rocket");

let height = 0;
let topPosition=250;
let leftPosition=250;


takeOff.addEventListener("click", function(event) {
    let shouldTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if(shouldTakeoff){
        flightStatus.innerHTML="Shuttle in flight.";
        shuttleBackground.style.backgroundColor = 'blue';
        height=10000;
        // rocketPosition.style.top="240px";
        shuttleHeight.innerHTML=height;
    };
});

land.addEventListener("click", function(event){
    window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML="The shuttle has landed.";
    shuttleBackground.style.backgroundColor = 'green';
    height=0;
    shuttleHeight.innerHTML= height;
    rocketPosition.style.top="250px";
    rocketPosition.style.left="250px";
});

abort.addEventListener("click", function(event){
    let shouldAbort = window.confirm("Confirm that you want to abort the mission");
    if(shouldAbort){
        flightStatus.innerHTML="Mission aborted.";
        shuttleBackground.style.backgroundColor='green';
        height=0;
        shuttleHeight.innerHTML= height;
        rocketPosition.style.top="250px";
        rocketPosition.style.left="250px";
    };
});

upClick.addEventListener("click", function(event){
    
    if(topPosition>0){
        topPosition-=10;
        let topPositionString = String(topPosition) + "px";
        rocketPosition.style.top=topPositionString;
    };

    if(height<250000){
        height += 10000;
        shuttleHeight.innerHTML=height;
    };
});

downClick.addEventListener("click", function(event){
    if(topPosition<250){
        topPosition+=10;
        let topPositionString = String(topPosition) + "px";
        rocketPosition.style.top=topPositionString;
    };
    
    if(height>0){
        height-=10000;
        shuttleHeight.innerHTML=height;
    };
});

rightClick.addEventListener("click", function(event){
   if(leftPosition<500){
        leftPosition+=10;
        let leftPositionString = String(leftPosition) + "px"
        rocketPosition.style.left=leftPositionString;
   };
});

leftClick.addEventListener("click", function(event){
    if(leftPosition>0){
        leftPosition-=10;
        let leftPositionString = String(leftPosition) + "px"
        rocketPosition.style.left=leftPositionString;
    };
});

});