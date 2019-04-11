var  database = [
{
    username:"andrei",
    password: "secret"
}
];

var newsFeed = [
    {
        username:"Bob",
        timeline: "So tired from learning..."
    },
    {
        username: "Sam",
        timeline: "Javascript is sooo cool"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("what's your password?");

function signIn(username,password ) {
    if (username=== database[0].username && 
        password === database[0].password) {
            console.log(newsFeed);
        } else {
            alert("Sorry,wrong username and password");
        }
}

signIn(userNamePrompt,passwordPrompt);
