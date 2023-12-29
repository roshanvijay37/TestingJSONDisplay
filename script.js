// script.js

function fetchData() {
    // Replace the URL with the API endpoint you want to use
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    // Fetch data from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayData(data) {
    const dataContainer = document.getElementById('data-container');

    // Clear previous data
    dataContainer.innerHTML = '';

    // Display data on the page
    data.forEach(item => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.body}</p>
        `;
        dataContainer.appendChild(postElement);
    });
}
