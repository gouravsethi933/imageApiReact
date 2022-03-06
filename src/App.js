import { useState } from "react";
import "./styles.css";
import axios from 'axios'
export default function App() {
  const[photo,setPhoto]=useState('');
const [result,setResult]=useState([]);

  const changePhoto=()=>{
axios.get('https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=YYe-zgM6Ur5ICB51sewSZp56nwWzyuEIm60yR_jPO6g')
.then((response)=>{
setResult(response.data.results);
})  
}
  return (
    <>
    <div className="conatiner" text-center my-3>
      <input type="text" className="form-control" value={photo}onChange={(e)=>{
        setPhoto(e.target.value)
        }} />
        

      <button type="submit" onClick={changePhoto}className='btn btn-primary' my-2>Get Photo</button>
      </div>
      <div className="container">
                <div class="row text-center text-lg-start">
                    {result.map((value) => {
                        return (
                            <div class="col-lg-3 col-md-4 col-6">
                                    <img class="img-fluid img-thumbnail d-block mb-4 h-100" src={value.urls.small} alt='' />
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}