// Function to hide start div and show end div
let startContainer = document.getElementById('startcontainer');
let btn = document.querySelector("#startbutton");

btn.addEventListener('click', function(){
    startContainer.style.opacity = 0;
    startContainer.style.transform = 'scale(0)';
    // Add timeout with length matching animation-duration
    window.setTimeout(function(){
        startContainer.style.display = 'none';
    },700);
});

function hideEndContainerShowWinner() {
    // In this function create 2 variables for :
    //     class gamecomtainer (.gamecontainer) using querySelector
    //     Id bottomcontainer using getElementByID.
    // Once the variables are created have the game container disappear.
}

// create similar to the above create variables for rockdiv, paperdiv, scissorsdiv, computerrockdiv, computerpaperdiv, computerscissorsdiv
const rockSelected = document.querySelector("#rockdiv");
