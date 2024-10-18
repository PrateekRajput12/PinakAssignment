// $(document).ready(function(){
//     $(".box").hover(function(){
//         $(this).css("transition", "transform 1s");
//         $(this).css("transform", "rotate(360deg)");
//     }, function(){
//         $(this).css("transform", "rotate(0deg)");
//     });
// });


const card1 = document.querySelector('.box1');
const card2 = document.querySelector('.box2');
const card3 = document.querySelector('.box3');
const card4 = document.querySelector('.box4');


card1.addEventListener('mouseover', () => {
    card1.style.transform = 'rotate(360deg)';
});

card1.addEventListener('mouseout', () => {
    card1.style.transform = 'rotate(0deg)';
});


card2.addEventListener('mouseover', () => {
    card2.style.transform = 'rotate(360deg)';
});

card2.addEventListener('mouseout', () => {
    card2.style.transform = 'rotate(0deg)';
});



card3.addEventListener('mouseover', () => {
    card3.style.transform = 'rotate(360deg)';
});

card3.addEventListener('mouseout', () => {
    card3.style.transform = 'rotate(0deg)';
});


card4.addEventListener('mouseover', () => {
    card4.style.transform = 'rotate(360deg)';
});

card4.addEventListener('mouseout', () => {
    card4.style.transform = 'rotate(0deg)';
});