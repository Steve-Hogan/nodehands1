const http = require('http');
const data = {
    Name:'Steve Hogan',
    Age:23,
    place:'Tamil Nadu',
}
const jsonData = JSON.stringify(data);

const server = http.createServer((req, res) => {
    res.write(`<h1>I am Steve Hogan</h1>`);
    res.write(jsonData);
    res.end();
})


server.listen(8000, () => {
    console.log(`App is running`);
})