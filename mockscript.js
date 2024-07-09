async function filterPosts() {
    const apiURL = 'https://jsonplaceholder.typicode.com/posts';
    const keyword = document.getElementById('keyword').value.toLowerCase();
    const outputElement = document.getElementById('output');

    try {
        // Fetch data from the mock API
        const response = await fetch(apiURL);

        // Check if the response is okay
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        // Parse the response data as JSON
        const posts = await response.json();

        // Filter posts based on the keyword in the title
        const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(keyword));

        // Log the filtered posts to the console and display in the HTML
        console.log(filteredPosts);
        outputElement.textContent = JSON.stringify(filteredPosts, null, 2);
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Failed to fetch posts:', error);
        outputElement.textContent = 'Failed to fetch posts: ' + error.message;
    }
}
