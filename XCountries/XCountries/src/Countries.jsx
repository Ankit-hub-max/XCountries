import { useEffect, useState } from "react";

const Card=({name,flag})=>{
return(<div
style={{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    gap:'5px',
    border:"1px solid grey",
    borderRadius:"10px",
    width:"200px",
    height:"200px",
}}>
    <img src={flag} 
    alt={`flag of ${name}`} 
    style={{width:"50px",height:"50px"}}/>
    <h2>{name}</h2>
</div>
);
};

const ENDPOINT="https://xcountries-backend.azurewebsites.net/all";

function Countries(){
const [apiData,SetApiData]=useState([]);
useEffect(()=>{
    fetch(ENDPOINT).then(response=>
        response.json()).then((data)=>{SetApiData(data)}).catch((error)=>
            console.error("Error Fetching data: ",error))
},[])
return( 
<div style={{display:"flex",
flexWrap:"wrap",
gap:"10px",

}}>
    {apiData.map(({name,flag,abbr})=>(
        <Card key={abbr} name={name} flag={flag}/>
    ))}
    </div>
)
}

export default Countries