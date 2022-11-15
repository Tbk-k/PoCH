import express from "express";


const app = express();
const API_PORT = process.env.API_PORT || 4001;

app.use(express.json())

app.get('/test',(req, res)=>{
res.json("Sprawdzam czy dział")
})

console.log(process.env.AA_AA)

app.listen(API_PORT, () => {
  console.log('aa',process.env.DB_PWD);
});
