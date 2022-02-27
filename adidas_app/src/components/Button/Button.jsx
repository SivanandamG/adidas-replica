import Button from '@mui/material/Button';
import { useState } from 'react';

export const Btn=({value,email,password})=>{
    const [login,setLogin] = useState(false);
    return(
        <div id="button_div">
            <Button
                 onClick={()=>{
                    fetch(`https://adidas-server.herokuapp.com/auth/login/${email}/${password}`).then((res)=>res.json()).then(()=>{setLogin(true)});
                   if(login){
                    window.location="/";
                   }
                   else{
                       alert("Invalid Credentials")
                   }
                   }}
            >
            {value}
            </Button>
            
        </div>
    )
}