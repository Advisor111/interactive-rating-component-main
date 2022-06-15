butt.onclick = function() {
    "use strict"
    const radioButtons = document.querySelectorAll('input[name="rate"]');
    let selected;
    for (const radioButton of radioButtons) {
    if (radioButton.checked) {
        selected = radioButton.value;
        break;
        }
    };
    conti.innerHTML=
    `<div class="card" id="card2" style="text-align: center;">
        <div class="image">
            <img src="images/illustration-thank-you.svg" alt="">
            <p class="rate">You selected ${selected ? selected : `0`} out of 5</p>
        </div>
        <h2>Thank you!</h2>
        <p>
            We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!
        </p>
    </div>`
}