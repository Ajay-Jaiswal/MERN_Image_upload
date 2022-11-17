import React,{useState,useEffect} from "react"
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [bookcover, setBookcover] = useState( null)

  function Saveuser(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', bookcover)
    formData.append('name', name )
    formData.append('description', description )
    formData.append('price', price )
 

    fetch("http://localhost:5000/post",{
      method : "POST",
     body : formData
    }).then((result) =>{
      result.json().then((resp) =>{
        console.warn("resp" , resp.data)
        if(resp.status === true){
          window.alert( resp.message);
          console.log(resp.message );
        } else{
          window.alert( resp.message)
            console.log('invalid data', resp)
        }
      })
    })
  }

  return (
    <div className="container">
      <form >
        <label class="row">
          Name:
          <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
        </label><br></br>
        <label>
        description:
          <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} />
        </label><br></br>
        <label>
        price:
          <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
        </label><br></br>
        <label>
        bookcover :
          <input type="file" multiple name="file" onChange={(e) =>{setBookcover(e.target.files[0])}} />
        
        </label><br></br>
        <input type="submit" value="Submit" onClick={Saveuser}/>
      </form>
     
    </div>
  );
}

export default App;
