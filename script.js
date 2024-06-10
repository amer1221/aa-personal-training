function showPage(pageId) {
    const pages = document.querySelectorAll('.content');
    pages.forEach(page => page.classList.add('hidden'));
    document.getElementById('content').innerHTML = document.getElementById(pageId).innerHTML;
}

function searchExercise() {
    const query = document.getElementById('exercise-search').value.toLowerCase();
    const results = document.getElementById('exercise-results');
    results.innerHTML = '';

    // Add your exercise videos here
    const exercises = {
        'push-up': 'https://www.example.com/push-up-video', // Replace with your video URLs
        'squat': 'https://www.example.com/squat-video', // Replace with your video URLs
        'plank': 'https://www.example.com/plank-video' // Replace with your video URLs
    };

    for (const [exercise, videoUrl] of Object.entries(exercises)) {
        if (exercise.includes(query)) {
            results.innerHTML += `<p><a href="${videoUrl}" target="_blank">${exercise}</a></p>`;
        }
    }

    if (results.innerHTML === '') {
        results.innerHTML = '<p>No exercises found.</p>';
    }
}

function calculateCalories(event) {
    event.preventDefault();

    const sex = document.getElementById('sex').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const age = document.getElementById('age').value;
    const activity = document.getElementById('activity').value;

    let bmr;

    if (sex === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const maintenanceCalories = bmr * activity;
    const surplusCalories = maintenanceCalories + 500;
    const deficitCalories = maintenanceCalories - 500;

    const results = document.getElementById('calorie-results');
    results.innerHTML = `
        <p>To maintain your weight: ${maintenanceCalories.toFixed(2)} calories/day</p>
        <p>To gain weight: ${surplusCalories.toFixed(2)} calories/day</p>
        <p>To lose weight: ${deficitCalories.toFixed(2)} calories/day</p>
    `;
}
