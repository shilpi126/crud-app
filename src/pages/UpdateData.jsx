
import React, {  useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import validator from 'validator'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useParams,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpdateData() {
   
    const {id} = useParams()
    const navigate = useNavigate()
    const getData = JSON.parse(localStorage.getItem("userdata"))
    
    const [items, setItems] = useState(getData)
    const [data, setData] = useState()
 
    let dataToBeUpdated = items.find((item,i) => {
        if(i+1 == id){
        return item;
        }
    })
    
    const [name,setName] = useState(dataToBeUpdated.name)
    const [email,setEmail] = useState(dataToBeUpdated.email)
    const [phoneNo, setPhoneNo] = useState(dataToBeUpdated.phoneNo)
    
   
   


    const handleUpdate = (e) => {
       

        const values = {name,email,phoneNo}

        if(values){
            if(values.name === ""){
                toast.error("Please enter name")
            }

            if(values.email === ""){
                toast.error("Please enter Email")
                
            }
            
            if(values.phoneNo === ""){
                toast.error("Please enter Phone Number")
            }

                       
            if(values.email !== "" && values.name !== "" && values.phoneNo !== ""){
                if (validator.isEmail(values.email)) {
                
                    for(let i=0; i < getData.length; i++){
                        if((i+1) == id){
                            getData[i]=values;
                            
                        }
                    }
            
                    localStorage.setItem("userdata",JSON.stringify([...getData]))
                    toast.success("data updated successfully")
                    
                    
                    setTimeout(()=>{
                        navigate("/")
                    },2000)
                    
                    
                } else {
                    toast.error('Enter valid Email!')
                }
            }

          
        }
        
    }

return (
    <div style={{display:"flex", justifyContent:"center",alignContent:"center",marginTop:"100px"}}>
    <Card sx={{ width: 445,border:"1px solid lightgray" }}>
    
    <CardContent>
    <Typography gutterBottom variant="h5" component="div" textAlign="center" color="gray">
        Update Data
    </Typography>
    <TextField 
    type='text'
    id="outlined-basic" 
    label="Name" 
    variant="outlined" 
    required
    size="small"
    fullWidth
    autoFocus
    sx={{mb:2}}
    
    value={name}
    onChange={(e)=>setName(e.target.value)}
    

    />
    
    <TextField 
    type='email'
    id="outlined-basic" 
    label="Email" 
    variant="outlined" 
    required 
    size="small"
    fullWidth
    sx={{mb:2}}
    autoFocus
    
    value={email}
    onChange={(e)=>setEmail(e.target.value)}

    />
    <TextField 
    type='number'
    id="outlined-basic" 
    label="Mobile Number" 
    variant="outlined" 
    required 
    size="small"
    fullWidth
    autoFocus
    
    value={phoneNo}
    onChange={(e)=>setPhoneNo(e.target.value)}

    />

    </CardContent>
    <CardActions sx={{display:"flex", justifyContent:"center"}}>
    <Button onClick={handleUpdate} size="small"  variant="contained" sx={{width:"200px"}}  >Update Data</Button>
    <ToastContainer />
    </CardActions>
</Card>

 </div>
  )
}

export default UpdateData