// 1. Block-Scoped Variables (const)
// We use 'const' because these DOM references will never be reassigned.
const fetchBtn = document.getElementById('fetchBtn');
const userList = document.getElementById('userList');

// 2. Arrow Functions
// Used here for the event listener callback
fetchBtn.addEventListener('click', () => {
    
    // Provide immediate UI feedback
    userList.innerHTML = '<p>Loading data...</p>';

    // 3. Promises (via the Fetch API)
    // fetch() initiates a network request and returns a Promise
    fetch('https://jsonplaceholder.typicode.com/users')
        
        // 4. Arrow Functions in the Promise Chain
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // response.json() also returns a Promise that resolves with the parsed JSON data
            return response.json(); 
        })
        .then(users => {
            // Pass the parsed data to our rendering function
            displayUsers(users);
        })
        .catch(error => {
            // .catch() handles any rejected Promises in the chain
            console.error('Error fetching data:', error);
            userList.innerHTML = `<p class="error">Failed to load data. Please try again later.</p>`;
        });
});

// Arrow function to handle the DOM manipulation
const displayUsers = (users) => {
    
    // 5. Array.map() and Template Literals
    // map() loops over the array and transforms each object into an HTML string.
    // Template literals (backticks ` `) allow us to easily embed expressions (${}).
    const htmlString = users.map(user => `
        <div class="user-card">
            <h3>${user.name}</h3>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>City:</strong> ${user.address.city}</p>
        </div>
    `).join(''); // join('') combines the array of HTML strings into one single string

    // 6. Block-Scoped Variables (let)
    // If we needed a variable to change, we would use 'let'. For example:
    // let resultCount = users.length; 
    
    // Inject the final string into the DOM
    userList.innerHTML = htmlString;
};