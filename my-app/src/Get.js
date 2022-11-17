import React,{useState,useEffect} from "react"

 const Get = () => {
    const [post, setPost] = useState([])
    const[image, setImage] = useState(0)
    useEffect(()=>{ 
        getList();
       },[])
      
     
       function getList(){
         fetch("http://localhost:5000/get").then((result)=>{result.json().then((resp)=>{
           setPost(resp.data)
           console.log(resp.data)
          
         })
       })
      }
  
       return (
    
    
        <div className="ccontainer">

{
            post.map((data)=>{
                return(
                    <div className="idiv">
                      <img src={data.bookcover[0]} height="300px" width="300px" />
                      <button onClick={()=>{setImage(image+1)}}>change</button>
                    <p><b>name</b> : {data.name}</p>
                    <p><b>description</b> : {data.description}</p>
                    <p><b>price</b> : {data.price}</p>
                    </div>  
                )
            })
          }
            
    
        
          
        </div>
      
       )
  
}
export default Get

/*
  {
            post.map((data)=>{
                return(
                    <div className="idiv">
                    <div className="idiv">
                    <p><b>name</b> : {data.name}</p>
                    <p><b>description</b> : {data.description}</p>
                    <p><b>price</b> : {data.price}</p>
                    <p><b>bookcover</b> : {data.bookcover}</p>
                    </div>  
                    </div>
                    
                )
            })
          }
*/