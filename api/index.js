import express from "express";


const app = express();
const API_PORT = process.env.API_PORT || 4001;

app.use(express.json())

app.get('/test',(req, res)=>{
res.json("Sprawdzam czy dział")
})

console.log(process.env.AA_1)

app.listen(API_PORT, () => {
  console.log(process.env.DB_PWD);
});
