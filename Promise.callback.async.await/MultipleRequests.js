function fetchData() {
    let p = new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => {
                if (!response.ok) {
                    // Log response body for debugging
                    response.text().then(body => {
                        console.error(`Failed to fetch data. Status Code: ${response.status}, Response Body: ${body}`);
                        reject(new Error(`Failed to fetch data. Status Code: ${response.status}`));
                    });
                } else {
                    return response.json();
                }
            })
            .then(data => {
                resolve(data);
                console.log('Fetch successful:', p);
            })
            .catch(error => {
                reject(error);
            });
    });

    return p;
}

fetchData()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
