import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {Link} from "react-router-dom"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

function Home() {

    const [data,setData]= useState([])

    useEffect(()=>{
        
        const userData = JSON.parse(localStorage.getItem("userdata"))
        
        setData(userData)
        
    },[])

    const handleDelete = (id)=>{
        console.log(id);
        const afterDeletedData = data?.filter((item,i)=>{
            return i+1 !== id;
        })
        localStorage.setItem("userdata",JSON.stringify(afterDeletedData))
        setData(afterDeletedData)
        
    }



  return (
    <div style={{display:"flex",flexWrap:"wrap", justifyContent:"space-evenly",alignContent:"center",marginTop:"100px"}}>
     {data == ""? 
     (
    <div style={{display:"flex",justifyContent:"center",flexDirection:"column",marginTop:"50px"}}>
    <CircularProgress color="secondary" sx={{alignSelf:"center"}}/>
    <Typography sx={{fontSize:"40px",color:"gray",marginTop:"40px"}}>data not found</Typography>
    </div>
     )
     
     :
     
     (
    

    data?.map((item,i)=>(
    <Card key={i} sx={{ width: 300,border:"1px solid lightgray ", marginBottom:"30px"}}>

    <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center" color="gray" borderBottom="1px solid lightgray">
            User Data:{i+1}
        </Typography>
        <Typography gutterBottom variant="h6" component="div"  color="gray">
            Name: {item.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div"  color="gray">
            Email: {item.email}
        </Typography>
        <Typography gutterBottom variant="h6" component="div"  color="gray">
            Mobile No: {item.phoneNo}
        </Typography>
        
        </CardContent>
        <CardActions sx={{display:"flex", justifyContent:"center"}}>
        <Link to={`/update/${i+1}`}>
        <Button  size="small" variant="contained" sx={{width:"100px",mr:"8px"}}  >Update</Button>
        </Link>
        <Button  size="small"  variant="contained" sx={{width:"100px"}}  color='error' onClick={(e)=>handleDelete(i+1)}>Delete</Button>

        </CardActions>
    </Card>
    ))
    )

    }

    </div>
    
    )
}

export default Home