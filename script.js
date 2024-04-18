const elem1=document.querySelectorAll(".elem")

elem1.forEach(div=>{
    const elemimage=div.querySelector("img")

    div.addEventListener("mousemove",function(dets){
        elemimage.style.left= dets.x+"px"
      
      })
      div.addEventListener("mouseenter",function(dets){
        elemimage.style.opacity=1   
    
      })
      div.addEventListener("mouseleave",function(dets){
        elemimage.style.opacity=0   
      
      })
})

// ************************************///

// document.addEventListener("DOMContentLoaded", function() {
//     // Select all div elements with class "elem"
//     const divElements = document.querySelectorAll(".elem");

//     // Iterate over each div element with class "elem"
//     divElements.forEach(div => {
//         // Get the <img> element inside the current div
//         const img = div.querySelector("img");

//         // Add mousemove event listener to the current div
//         div.addEventListener("mousemove", function(event) {
//                 // elemimage.style.opacity=1   

//             // Get the width of the div element
//             const divWidth = div.clientWidth;

//             // Calculate the position of the cursor relative to the div
//             const xPosition = event.offsetX;

//             // Calculate the percentage of cursor position relative to div width
//             const cursorPercentage = xPosition / divWidth;

//             // Calculate the maximum movement range (half of image width)
//             const maxMove = (img.width / 2) - (img.width * cursorPercentage);

//             // Update the left position of the image based on cursor movement
//             img.style.left = `${maxMove}px`;
//         });
        
//         // Reset image position when mouse leaves the div
//         div.addEventListener("mouseleave", function() {
//             img.style.left = "0px"; // Reset to initial position
//         });
//     });
// });
