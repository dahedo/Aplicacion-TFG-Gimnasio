import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MuenuNutricionista(props) {

    const navigate = useNavigate();

    useEffect(()=>{
        var loggedUser= window.localStorage.getItem('loggedUser');
        
        if(loggedUser == null){
          navigate('/login');
        }else{
            loggedUser= JSON.parse(loggedUser)
 
          if(loggedUser.Rol === 'CLIENTE'){
            navigate('/menuCliente');
          }if(loggedUser.Rol === 'ENTRENADOR'){
            navigate('/menuEntrenador');
          }
        }
      
      },[])

    return (<div>MuenuNutricionista</div>)
}
export default MuenuNutricionista;