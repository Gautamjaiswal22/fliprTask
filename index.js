const app = require('./app');
const db = require('./config/db');

const port = 3000;

app.get('/', (req, res) => {
    res.send("I am Gautam Jaiswal");
});
 
app.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`);
});
