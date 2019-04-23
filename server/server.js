const express = require('express');
const app = express();

app.use(express.static('server/public'));

app.listen(9000, function() {
    console.log('Hey! Server is up and running!');
});

app.get('/kitty', function(request, response){
    response.send('Meow');
});