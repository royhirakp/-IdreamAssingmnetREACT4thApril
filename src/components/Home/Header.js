import React, { useEffect, useState } from 'react'
import './Home'
import axios from 'axios';
import Loader from '../cards/Loder';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
const Header = (props) => {
    console.log(props.popupdata.popupState,"from hesaddd=====")
    const [loderStatus, setLoder] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    async function serchdata(){
        setLoder(true)
        try {
            let res = await axios.get(`https://idreamassingmnet.onrender.com/image/search/${searchInput}`)
            console.log(res.data.imagedata)
            props.setImageDta(res.data.imagedata.reverse())
        } catch (error) {
            console.log(error)
        }
        setLoder(false)
    }
    useEffect(()=>{
        if(searchInput.length!==0){
            if(searchInput.length%2===0) {
                // setTimeout(()=>{
                    console.log(searchInput)
                    serchdata()
                // },3000)
            }

        }
        
        // console.log(searchInput)
    },[searchInput])
  return (
    <>
     {loderStatus ? <Loader/>: "" }
        <nav className='headerContainer'>
            <div className="logo">
                <div>
                <AutoAwesomeMosaicIcon/>
                </div>
                <div className="logoText">
                <p>My Unsplash</p>
                <br />
                <span>devchallenge.io</span>
                </div>
            </div>
            <div className="searchBar">
                <input type="text"
                className='searchInput'
                onChange={(e)=>setSearchInput(e.target.value)}
                placeholder='search by leabel' />
            </div>
            <div className="addPhButton">
                <button 
                onClick={()=>{
                    props.setaddPhotoComponentStatus(true)
                    props.popupdata.sePopupState(!props.popupdata.popupState)
                }}
                >Add a Photo</button>
            </div>
        </nav>
    </>
  )
}

export default Header
