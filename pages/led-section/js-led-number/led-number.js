let bigImg = document.querySelector(".big-image img");
let smallImg = document.getElementsByClassName("small-x") // use class name to be in Array [img , img , img ...]


for (let i = 0; i < smallImg.length ; i++) {
    smallImg[i].onclick = function(){
        bigImg.src = smallImg[i].src
    }
}

            //  دا الكود لو مش هتعمل لوب او تكرار و هتكمل لحد 50  //

// smallImg[0].onclick = function(){
//     bigImg.src = smallImg[0].src
// }
// smallImg[1].onclick = function(){
//     bigImg.src = smallImg[1].src
// }
// smallImg[2].onclick = function(){
//     bigImg.src = smallImg[2].src
// }
// smallImg[3].onclick = function(){
//     bigImg.src = smallImg[3].src
// }
// smallImg[4].onclick = function(){
//     bigImg.src = smallImg[4].src
// }
// smallImg[5].onclick = function(){
//     bigImg.src = smallImg[5].src
// }


