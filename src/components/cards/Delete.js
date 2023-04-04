import React, { useState } from 'react'
import axios from 'axios'
import './card.css'
import Loader from './Loder'
const Delete = (props) => {
    const [ password, setPassword] = useState('')
    const [passwordErr, setPsswordError ] = useState(false)
    const [loderStatus, setLoder] = useState(false)
    // console.log(props)
    async function handelSubbmit(e){
        setLoder(true)
        e.preventDefault()
        // console.log('from sumbited', props.data)
        if(password === ""){
            setPsswordError(true)
            return;
        }else{
            setPsswordError(false)
        }
         try {
          let res = await axios.delete(`https://idreamassingmnet.onrender.com/image/${props.data}`)
          console.log(res)
        } catch (error) {
          console.log(error)
        } 
        // console.log(props.data2.updateStae)
        props.data2.setupdateState(!props.data2.updateStae)
        setLoder(false)
        props.set(false)
        // console.log(props.data2.updateStae)
    }
  return (
        <>
        <div className='deletepopup'>
            <h3>Are you sure?</h3>
        <form onSubmit={handelSubbmit} action="">
            <label htmlFor="password">Password :</label>
            <br />
            <input type="text" id='password'
            placeholder='***********'
            onChange={(e)=>setPassword(e.target.value)}/>
            <br />
            <button>Deletd</button>
        </form>
        <button 
        className='buttonFrcancle' 
        onClick={()=>props.set(false)}
        >Cancel</button>

            {passwordErr? <>pleasw enter password</>:""}           
            {loderStatus ? <Loader/>: "" }

        </div>
        </>
  )
}

export default Delete
