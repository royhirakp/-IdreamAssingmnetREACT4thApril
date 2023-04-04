import React, { useState } from 'react'
import axios from 'axios'
import './card.css'
import Loader from './Loder'
const Delete = (props) => {
    const [password, setPassword] = useState('')
    const [passwordErr, setPsswordError] = useState(false)
    const [loderStatus, setLoder] = useState(false)
    // console.log(        )
    async function handelSubbmit(e) {
        setLoder(true)
        e.preventDefault()
        // console.log('from sumbited', props.data)
        if (password === "") {
            setPsswordError(true)
            setLoder(false)
            return;
        } else {
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
        props.popupHandel(false)
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
                        onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <button>Deletd</button>
                </form>
                <button
                    className='buttonFrcancle'
                    onClick={() =>{ props.set(false)
                        props.popupHandel(false)
                    }}
                >Cancel</button>

                {passwordErr ? <>N.B: Authinticaion and autorization not done , Type anythig as password</> : ""}
                {loderStatus ? <Loader /> : ""}

            </div>
        </>
    )
}

export default Delete
