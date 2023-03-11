const express = require('express');
const app = express();
const port  = 3000;
const crud = require('./crud');
const bodyParser = require('body-parser');

//Body parser is needed to access the request body in post request.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}))

app.get('/', (req,res) => {
    res.send('Hello World');
})

app.get('/data', crud.getData);
app.post('/data', crud.storeData);
app.delete('/data/:id', crud.deleteData)

app.listen(port, () => {
    console.log(`Application started in port ${port}`)
});