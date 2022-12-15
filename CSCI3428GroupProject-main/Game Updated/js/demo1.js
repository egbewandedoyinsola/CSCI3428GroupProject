/*
  The purpose of this file is to generate 4 screens one after another,
  each containing 3 images, where one image must match the associated question.
  When all 4 screens have been played, the software goes back to the first
  screen, and starts the process over again.
  Authors: Terry Goldsmith (Created fully functioning code)
         : Chris Churchill (revised code to apply to woodland conservation site)
         : Romina Rahman (Revised code to work for the game for our St. Margaret's 
           Bay Area Woodland Conservation Website )
*/


// global array which has the questions
let questions = [
 "Which one is the Yellow Birch Tree?",
 "Which one is the Apple Tree?",
 "What one is the Pear Tree?",
 "What should you check to find directions?"
];

 // global array containing the answers for the game
 // Note: Each screen contains 3 images: image 1, image 2 and image 3 from
 //       left to right or from top to bottom depending on your device.
 let answers = [1, 2, 3, 2];

 // global array containing 4 sets of 3 images making up the 4 screens.
 // There are 12 elements in this array.
let panels = [
  "Yellow Birch.jpg",
  "Random1.jpg",
  "Random2.jpg",
  "Pear Tree.jpg",
  "Apple Tree.jpg",
  "Random2.jpg",
  "Random3.jpg",
  "Yellow Birch.jpg",
  "Pear Tree.jpg",
  "Church.jpg",
  "Directions.jpg",
  "Well.jpg"
];

 // Contains the current screen number starting at zero.
 let panelSet = 0;

 /*
   The purpose of this function is to inject HTML that consists of:
     - 3 images
     - each image is clickable
     - each image when clicked will call the same "choose" function
       but with a different argument: 1, 2 or 3 representing the image
       number
    This function also displays the question.
   Authors: Terry Goldsmith
            Romina Rahman
 */
function setup() {

  document.getElementById("heading").innerHTML = questions[panelSet];

   let str1 = '<input class="button" type="image" src="./pics/';
   let str2 = '" width="325" height="325" onclick="choose(1)"/>';
   let str3 = str1 + panels[0] + str2;
   document.getElementById("pic1").innerHTML = str3;

   str2 = '" width="325" height="325" onclick="choose(2)"/>';
   str3 = str1 + panels[1] + str2;
   document.getElementById("pic2").innerHTML = str3;

   str2 = '" width="325" height="325" onclick="choose(3)"/>';
   str3 = str1 + panels[2] + str2;
   document.getElementById("pic3").innerHTML = str3;
}


 /*
   The purpose of this function is to produce a "try again" message if the
   wrong image was clicked on, and to produce a "congratulations" message if
   the correct image was clicked on. Also, for a correct image selection,
   the code will set up the next screen once the button has been clicked.
   IF USER CHOICE EQUALS CORRECT ANSWER
       PRODUCE CONGRATULATING MESSAGE
       INSERT CLICKABLE IMAGE 1 INCLUDING FUNCTION CALL WITH ARGUMENT = 1
       INSERT CLICKABLE IMAGE 2 INCLUDING FUNCTION CALL WITH ARGUMENT = 2
       INSERT CLICKABLE IMAGE 3 INCLUDING FUNCTION CALL WITH ARGUMENT = 3
       Changes the question
   ELSE
       PRODUCE TRY AGAIN MESSAGE
   Authors: Terry Goldsmith
            Romina Rahman
  */
  function choose(choice) {
    if (choice == answers[panelSet]) {
    congratulations();

    // update panelSet in the sequence: 0 1 2 3 and back to 0
     panelSet = (panelSet + parseInt(1)) % parseInt(4);

     document.getElementById("heading").innerHTML = questions[panelSet];

     let str1 = '<input class="button" type="image" src="./pics/';
     let str2 = '" width="325" height="325" onclick="choose(1)"/>';
     let str3 = str1 + panels[panelSet * 3] + str2;
     document.getElementById("pic1").innerHTML = str3;

     str2 = '" width="325" height="325" onclick="choose(2)"/>';
     str3 = str1 + panels[panelSet * 3 + parseInt(1)] + str2;
     document.getElementById("pic2").innerHTML = str3;

     str2 = '" width="325" height="325" onclick="choose(3)"/>';
     str3 = str1 + panels[panelSet * 3 + parseInt(2)] + str2;
     document.getElementById("pic3").innerHTML = str3;
    } else {
     tryAgain();
    }
  }
  
  /*
  The purpose of this function is to diaplay the congratulations message when the correct answer,
  is selected, blur the background which contains the question and the three images 
  and to also display the button containing the ok text associated with the congratulations message.
  Authors: Romina Rahman
  */
  function congratulations() {
    document.querySelector(".congrats").style.display = "block";
    document.querySelector(".blur_background").style.filter = "blur(20px)";
    document.querySelector(".ok_button").style.display = "block";
  }
  
  /*
  The purpose of this function is to display the try again message when an incorrect answer is selected,
  blur the background containing the question and the three images and to display the button containing
  the ok text associated with the try again message.
  Authors: Romina Rahman
  */
  function tryAgain() {
    document.querySelector(".try_again").style.display = "block";
    document.querySelector(".blur_background").style.filter = "blur(20px)";
    document.querySelector(".try_button").style.display = "block";
  }

  /*
  Selects the button containing the class ok_button which is associated with the congratulations message.
  When the button is clicked, the congratulations message is removed from screen, the blur is removed
  and the button is also removed. 
  Authors: Romina Rahman
  */
  document.querySelector(".ok_button").addEventListener("click", function() {
    document.querySelector(".congrats").style.display = "none";
    document.querySelector(".blur_background").style.filter = "blur(0px)";
    document.querySelector(".ok_button").style.display = "none";
  });

  /*
  Selects the button containing the class try_button which is associated with the try again message. 
  When the button is clicked, the try again message is removed from screen, the blur is removed, and the
  button is also removed. 
  Authors: Romina Rahman
  */
  document.querySelector(".try_button").addEventListener("click", function() {
    document.querySelector(".try_again").style.display = "none";
    document.querySelector(".blur_background").style.filter = "blur(0px)";
    document.querySelector(".try_button").style.display = "none";
  });

  
