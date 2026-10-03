// Select all counter elements
const counters = document.querySelectorAll(".counter");


// Run animation for each counter
counters.forEach(counter => {

    const target = Number(counter.dataset.target);

    const duration = 2000; // 2 seconds

    const startTime = performance.now();


    function updateCounter(currentTime) {

        // Calculate animation progress
        const progress = Math.min(
            (currentTime - startTime) / duration,
            1
        );


        // Calculate current number
        const count = Math.floor(progress * target);


        // Display number with comma formatting
        counter.textContent =
            count.toLocaleString() + "+";


        // Continue animation
        if (progress < 1) {

            requestAnimationFrame(updateCounter);

        } else {

            // Make sure final number is exact
            counter.textContent =
                target.toLocaleString() + "+";
        }
    }


    // Start animation
    requestAnimationFrame(updateCounter);

});


// job button
const jobbutton = document.getElementById("jobButton")
window.addEventListener("scroll",function(){
    if(window.scrollY > 100){
        jobbutton.classList.add("show")
    }else{
        jobbutton.classList.remove("show")
    }
})