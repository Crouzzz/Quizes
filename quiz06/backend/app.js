const express = require('express');
const app = express();
// const cors = require('cors');


app.use(express.json());
// app.use(cors());



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});