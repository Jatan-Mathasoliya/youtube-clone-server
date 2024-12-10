import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());

app.use('/assets', express.static('./public/assets'));

const data = [
    {id:1, thumb:'/assets/t8.png', profile:'/assets/1.png', title:"Bulbuli|coke studio Bangla|season one|Ritu Raj X Nandita", name:"Coke studio Bangla", img:'/assets/verified.png', text:"1.5M views  2 days ago"},
    {id:2, thumb:'/assets/t9.png', profile:'/assets/2.png', title:"Bulbuli|coke studio Bangla|season one|Ritu Raj X Nandita", name:"Coke studio Bangla", img:'/assets/verified.png', text:"1.5M views  2 days ago"},
    {id:3, thumb:'/assets/t10.png', profile:'/assets/3.png', title:"Bulbuli|coke studio Bangla|season one|Ritu Raj X Nandita", name:"Coke studio Bangla", img:'/assets/verified.png', text:"1.5M views  2 days ago"},
    {id:3, thumb:'/assets/t11.png', profile:'/assets/3.png', title:"Bulbuli|coke studio Bangla|season one|Ritu Raj X Nandita", name:"Coke studio Bangla", img:'/assets/verified.png', text:"1.5M views  2 days ago"},
    {id:3, thumb:'/assets/t4.png', profile:'/assets/3.png', title:"Bulbuli|coke studio Bangla|season one|Ritu Raj X Nandita", name:"Coke studio Bangla", img:'/assets/verified.png', text:"1.5M views  2 days ago"},
    {id:3, thumb:'/assets/t5.png', profile:'/assets/3.png', title:"Bulbuli|coke studio Bangla|season one|Ritu Raj X Nandita", name:"Coke studio Bangla", img:'/assets/verified.png', text:"1.5M views  2 days ago"},
    {id:3, thumb:'/assets/t6.png', profile:'/assets/3.png', title:"Bulbuli|coke studio Bangla|season one|Ritu Raj X Nandita", name:"Coke studio Bangla", img:'/assets/verified.png', text:"1.5M views  2 days ago"},
    {id:3, thumb:'/assets/t7.png', profile:'/assets/3.png', title:"Bulbuli|coke studio Bangla|season one|Ritu Raj X Nandita", name:"Coke studio Bangla", img:'/assets/verified.png', text:"1.5M views  2 days ago"},
    {id:3, thumb:'/assets/t3.png', profile:'/assets/3.png', title:"Bulbuli|coke studio Bangla|season one|Ritu Raj X Nandita", name:"Coke studio Bangla", img:'/assets/verified.png', text:"1.5M views  2 days ago"},
    {id:3, thumb:'/assets/t3.png', profile:'/assets/3.png', title:"Bulbuli|coke studio Bangla|season one|Ritu Raj X Nandita", name:"Coke studio Bangla", img:'/assets/verified.png', text:"1.5M views  2 days ago"},
    {id:3, thumb:'/assets/t3.png', profile:'/assets/3.png', title:"Bulbuli|coke studio Bangla|season one|Ritu Raj X Nandita", name:"Coke studio Bangla", img:'/assets/verified.png', text:"1.5M views  2 days ago"},
    {id:3, thumb:'/assets/t3.png', profile:'/assets/3.png', title:"Bulbuli|coke studio Bangla|season one|Ritu Raj X Nandita", name:"Coke studio Bangla", img:'/assets/verified.png', text:"1.5M views  2 days ago"},
]

app.get('/videos', (req, res)=>{
    res.json(data)
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});