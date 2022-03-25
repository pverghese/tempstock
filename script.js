function search() {
    var queryURL = "https://cors-anywhere.herokuapp.com/query1.finance.yahoo.com/v7/finance/download/NFLX?period1=1647096486&period2=1648096486&interval=1d&events=history&includeAdjustedClose=true";
    fetch(queryURL,{
    credentials: 'same-origin'})
            .then(function (response) {
                // response.json() returns a json string,
                // returning it will convert it 
                // to a pure JavaScript 
                // object for the next then's callback
                return response.text();
            })
            .then(function (users) {
                // users is a JavaScript object here
		console.log(users)
            })
            .catch(function (error) {
                console.log('Error during fetch: ' + error.message);
            });
}

function displayUsersAsATable(users) {
    // users is a JavaScript object

    // empty the div that contains the results
    var usersDiv = document.querySelector("#users");
    usersDiv.innerHTML = "";

    // creates and populate the table with users
    var table = document.createElement("table");

    // iterate on the array of users
    users.forEach(function (currentUser) {
        // creates a row
        var row = table.insertRow();
        // insert cells in the row
        var nameCell = row.insertCell();
        nameCell.innerHTML = currentUser.name;
        var cityCell = row.insertCell();
        cityCell.innerHTML = currentUser.address.city;
    });

    // adds the table to the div
    usersDiv.appendChild(table);
}
