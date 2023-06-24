import React, {  useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import validator from 'validator'
function Form() {
    const navigate = useNavigate()
    
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
  
    const [phoneNo, setPhoneNo] = useState("")

    const handleClick = () => {
        
        const getData = JSON.parse(localStorage.getItem("userdata")) || []
        // console.log(getData);
        const data = {name, email, phoneNo}

        if(data){
            if(data.name === ""){
                toast.error("Please enter name")
            }

            if(data.email === ""){
                toast.error("Please enter Email")
                
            }
            
            if(data.phoneNo === ""){
                toast.error("Please enter Phone Number")
            }
            
            
                if(data.email !== "" && data.name !== "" && data.phoneNo !== ""){
                    
                    if (validator.isEmail(data.email)) {
                        
                        localStorage.setItem("userdata",JSON.stringify([...getData,data]))
                        toast.success("user created successfully")
                        
                        
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
        <Card sx={{ width: 445 , border:"1px solid lightgray"}}>
        
    <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center" color="gray">
            Create User
        </Typography>
        <TextField 
        type='text'
        id="outlined-basic" 
        label="Name" 
        variant="outlined" 
        required
        size="small"
        fullWidth
        
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
        
        value={phoneNo}
        onChange={(e)=>setPhoneNo(e.target.value)}

        />
        



        </CardContent>
        <CardActions sx={{display:"flex", justifyContent:"center"}}>
        <Button onClick={handleClick} size="small"  variant="contained" sx={{width:"200px"}} >Submit</Button>
        <ToastContainer />
        </CardActions>
 </Card>

     </div>

    
  
    )
}

export default Form