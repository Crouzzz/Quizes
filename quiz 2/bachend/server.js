const express = require('express');
const cors = require('cors');
const {data} = require('./db')
// const {userRouter}=require('./userRouter')
const app = express();


//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());
// app.use('/data',userRouter)


const PORT = process.env.PORT || 3050;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
// task 1
app.get('/', (req, res) => {
	res.send(data)
});
// task 2
// app.get('gitbyid/:id',(req,res)=>{
// 	const yousef = data.filter(
// 		(elem)=>elem.id===(req.params.id)
// 	)
// 	res.send(yousef);
// })

app.get('/getById/:id', (req, res) => {
	const youseff = data.filter(
	  (elem) => elem.id === parseInt(req.params.id)
	);
	res.send(youseff);
  });
  //task 3
  app.get('/getRandom', (req, res) => {
	const youseff = Math.floor(Math.random()*5)
	const random=data.filter(
		(elem)=> elem.id===youseff
	)
	res.send(random);
  });
  