import React, { useState } from 'react'
import "./card.css"
// import axios from 'axios'
import Delete from './Delete'
const Image = (props) => {
    const [hoverState, sethoverstate] = useState(false)
    const [deletePopupStatus, setdeletePopupStatus] = useState(false)
    const base64Str = btoa(
        String.fromCharCode(...new Uint8Array((props.data.image?.data.data)))
    )
    // console.log(props.data2)
    async function handelDelete(){
      setdeletePopupStatus(true)
      console.log(props.data._id)
      // props.popupdata.sePopupState(!props.popupdata.popupState)
      // try {
      //   let res = await axios.delete(`https://idreamassingmnet.onrender.com/image/${props.data._id}`)
      //   console.log(res)
      // } catch (error) {
      //   console.log(error)
      // }
    }

  return (
    <div className='imageCradConatainer' 
    onMouseEnter={()=>sethoverstate(true)}
    onMouseLeave={()=>sethoverstate(false)}
    >
      
      <div className="hoverdivContainer">
        {hoverState ? <>
        <div className='hoverDiv'>
          <button  onClick={handelDelete} >delete</button>
          <p >{props.data.label}</p>  
        </div>
        
        </>: "" }
      </div>

      {
        deletePopupStatus? <Delete
        set={setdeletePopupStatus}
        popupHandel= {props.popupdata.sePopupState}
        data2 = {props.data2}
        data ={props.data._id}
        /> : ""
      }
      <div className="imagediv">
      <img src={`data:image/png;base64,${base64Str}`} alt="" />

      </div>
    </div>
  )
}

export default Image
