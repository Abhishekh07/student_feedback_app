const form = document.getElementById("feedbackForm");

const feedbackList = document.getElementById("feedbackList");

const counter = document.getElementById("counter");

const feedbackInput = document.getElementById("feedback");

const feedbackCount = document.getElementById("feedbackCount");

const totalFeedback = document.getElementById("totalFeedback");

const averageRating = document.getElementById("averageRating");

let feedbacks = [];


// Character Counter

feedbackInput.addEventListener("input", function () {

    counter.textContent =
        `${feedbackInput.value.length} / 300`;

});


// Form Submission

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const course =
        document.getElementById("course").value;

    const feedback =
        feedbackInput.value.trim();

    const rating =
        document.querySelector(
            'input[name="rating"]:checked'
        ).value;


    // Create feedback object

    const newFeedback = {

        name: name,

        course: course,

        feedback: feedback,

        rating: Number(rating)

    };


    feedbacks.push(newFeedback);


    // Display feedback

    displayFeedback();


    // Reset form

    form.reset();

    counter.textContent = "0 / 300";


    // Scroll to feedback

    setTimeout(() => {

        document
            .querySelector(".feedback-section")
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 100);


});


// Display Feedback

function displayFeedback() {

    feedbackList.innerHTML = "";


    feedbacks.forEach(function (item) {

        const card =
            document.createElement("div");

        card.classList.add("feedback-card");


        const stars =
            "★".repeat(item.rating) +
            "☆".repeat(5 - item.rating);


        card.innerHTML = `

            <div class="feedback-card-top">

                <div class="student-name">
                    ${escapeHTML(item.name)}
                </div>

                <div class="course-tag">
                    ${escapeHTML(item.course)}
                </div>

            </div>

            <div class="rating">
                ${stars}
            </div>

            <p class="feedback-text">
                ${escapeHTML(item.feedback)}
            </p>

        `;


        feedbackList.prepend(card);

    });


    updateStats();

}


// Update Statistics

function updateStats() {

    const total = feedbacks.length;


    feedbackCount.textContent = total;

    totalFeedback.textContent = total;


    if (total === 0) {

        averageRating.textContent = "0.0";

        return;

    }


    const sum =
        feedbacks.reduce(
            (total, item) => total + item.rating,
            0
        );


    const average = sum / total;


    averageRating.textContent =
        average.toFixed(1);

}


// Security helper

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}