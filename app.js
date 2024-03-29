const express = require('express');
const cors = require('cors');


const app = express();
const PORT = 5000;
app.use(cors({
    origin: '*'
}));
app.get('/', (req, res)=>{
    res.status(200);
    res.send("Thanks,for using my API!");
});

app.get('/hello', (req, res)=>{
    res.status(200);
    res.send("Hello");
});

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running,and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
