import React, { useState } from 'react'
import './card.css'
import axios from 'axios'
import Loader from './Loder'
const Addphoto = (props) => {
    let [label, setLebel] = useState('')
    const [imageFile, setImageFile] = useState('');
    const [loderStatus, setLoder] = useState(false)
  
   async function handelSubbmit(e){
        e.preventDefault()
        setLoder(true)
        // console.log('from sumbited',props.data.setupdateState, updateStae )

        const formData = new FormData();    
        formData.append('image',imageFile,imageFile.name);
        formData.append('label',label);
        console.log(formData)

        try {
            const res = await axios.post('https://idreamassingmnet.onrender.com/image',formData)
                console.log(res,'<=image post axios')       
        } catch (error) {
            console.log(error)
        }
        props.data.setupdateState(!props.data.updateStae)
        props.setaddPhotoComponentStatus(false)
        setLoder(false)
    }
  return (
    <div className='uplodePhotoContainer'>
      <p>Add a new photo</p>
      <form onSubmit={handelSubbmit} action="">
        <label htmlFor="label">Label</label>
        <br />
        <input type="text" id='label'
        onChange={(e)=>setLebel(e.target.value)}/>
        <br />
        <label htmlFor="Photo">selsect Photo</label>
        <br />
        <input type="file" id='Photo'
        onChange={(e)=>setImageFile(e.target.files[0])}/>

        <button>Submit</button>
      </form>
      <button 
      className='addphotopopupCancle'
        onClick={()=>props.setaddPhotoComponentStatus(false)}>
        Cancel
      </button>
      {loderStatus ? <Loader/>: "" }
    </div>
  )
}

export default Addphoto
