import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MuenuEntrenador(props) {
    const navigate = useNavigate();

    

    useEffect(()=>{
        var loggedUser= window.localStorage.getItem('loggedUser');
         
        if(loggedUser == null){
          navigate('/login');
        }else{

            loggedUser= JSON.parse(loggedUser)
 
          if(loggedUser.Rol === 'CLIENTE'){
            navigate('/menuCliente');
          }if(loggedUser.Rol === 'NUTRICIONISTA'){
            navigate('/menuNutricionista');
          }
        }
      
      },[])

    return (<div>MuenuEntrenador</div>)
}
export default MuenuEntrenador;