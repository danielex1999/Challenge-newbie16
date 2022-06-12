    var rating_value = document.getElementsByClassName("rating_button");
    var submit_button = document.getElementById("submit_button");
    var rating_value_number = 0;

    /*Rating 1-5*/
    for (var i = 0; i < rating_value.length; i++) {
        rating_value[i].addEventListener("click", function () {
            for (var i = 0; i < rating_value.length; i++) {
                rating_value[i].classList.remove("active");
            }
            this.classList.add("active");
            rating_value_number = this.innerHTML;
        });
    }

submit_button.addEventListener("click", function () {
    document.querySelector(".container_information").style.display = "none";
    document.querySelector(".thank_you_state").style.display = "flex";
    document.querySelector(".selection_rating").textContent = "You selected "+rating_value_number+" out of 5";

});