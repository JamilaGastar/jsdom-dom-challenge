document.addEventListener("DOMContentLoaded", () => {

    // timer function set at intervals of 1 second, increments by 1 per second and is logged
    const counter = document.getElementById('counter');
    function timer(){
        let sec = 0;
        let timer = setInterval(function(){
            counter.innerHTML=sec;
            sec++;

        }, 1000);

    //Minus button when clicked decrements     
    const minusButton = document.getElementById('minus');
        minusButton.addEventListener("click", function() {
            counter.innerHTML=sec--;
        })

    //Plus button when clicked increments 
    const plusButton = document.getElementById('plus');  
        plusButton.addEventListener("click", function() {
             counter.innerHTML=sec + 1;
         })
        
         const likes = document.querySelector('ul');

    //Heart button when clicked logs which number on timer was liked and how many times as new listed node in ul
    const heartButton = document.getElementById('heart');     
         heartButton.addEventListener("click", function() {
            
            let likeCount = 1;
            const newLike = document.createElement('li'); 
            newLike.innerHTML = `${sec} has been liked ${likeCount} time`;
            likes.appendChild(newLike);

             //for (let i = 0; i < 1; i++) {
                // const newLike = document.createElement('li');
                // newLike.innerHTML = `${sec} has been liked ${likeCount} time`;
                // likes.appendChild(newLike);
             // }

         })

         let count = 0;
    //Pause button when clicked pauses timer and when clicked again starts timer again
    const pauseButton = document.getElementById('pause'); 
    const submitButton = document.getElementById('submit');
    
        pauseButton.addEventListener("click", function(){
            count++;
            console.log(count);

            if (count === count%2) {
            clearInterval(timer);
            pauseButton.innerHTML = "resume";
            minusButton.disabled = true; 
            plusButton.disabled = true; 
            heartButton.disabled = true; 
            submitButton.disabled = true;
            } else { !clearInterval(timer);
                pauseButton.innerHTML = "pause";
                minusButton.disabled = false; 
                plusButton.disabled = false; 
                heartButton.disabled = false; 
                submitButton.disabled = false;
            }
        })
        
        const form = document.getElementById('comment-form');
        const commentsList = document.getElementById('list');
        submitButton.addEventListener("click", function(event){
            event.preventDefault();
            let commentInputValue = document.getElementById('comment-input').value;

            let newComment = document.createElement('p');
            let text = document.createTextNode(commentInputValue);
            newComment.appendChild(text);
            commentsList.appendChild(newComment);
            form.reset();
        })
    }
    timer();
})

