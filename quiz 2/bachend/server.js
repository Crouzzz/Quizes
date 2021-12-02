const express = require('express');
const cors = require('cors');
const {data} = require('./db')
const {userRouter}=require('./userRouter')
const app = express();


//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());
app.use('/data',userRouter)


const PORT = process.env.PORT || 3050;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
app.get('/', (req, res) => {
	res.send(data)
});