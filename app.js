const express =  require('express');
const app = express();
const port =3034;
const path = require('path');

app.use(express.static(path.join(__dirname,'public')))



app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','index.html')))
app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','main.js')))




app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))






