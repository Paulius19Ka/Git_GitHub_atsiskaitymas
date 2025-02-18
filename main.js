fetch('data.json')
.then(response => response.json())
.then(data => {
    console.log(data.tabs);
})
.catch(error => console.error('Error: ', error));