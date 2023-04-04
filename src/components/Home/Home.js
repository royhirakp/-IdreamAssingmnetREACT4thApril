import React, { useEffect, useState } from 'react'
import Header from './Header'
import Image from '../cards/Image'
import './Home.css'
import Addphoto from '../cards/Addphoto'
import Loader from '../cards/Loder'
const Home = () => {
  const [loderStatus, setLoder] = useState(false)
  const[updateStae, setupdateState] = useState(false)
  let [imageDta, setImageDta] = useState([])
  let [addPhotoComponentStatus,setaddPhotoComponentStatus] = useState(false)
  useEffect(()=>{
    // console.log('workingg1')
    setLoder(true)
      fetch('https://idreamassingmnet.onrender.com/image')
      .then(res=>res.json())
      .then(data=>{
        // console.log('workingg12')
          console.log(data.imagedata)
          setImageDta(data.imagedata.reverse())

      })
      .catch(err=> console.log(err)).finally(()=>setLoder(false))
  },[updateStae])
  return (
    <div>
            <Header 
            data={imageDta} 
            setImageDta={setImageDta}
            setaddPhotoComponentStatus={setaddPhotoComponentStatus}/>
      
      {addPhotoComponentStatus ? <Addphoto
      setaddPhotoComponentStatus={setaddPhotoComponentStatus}
      data = {{updateStae, setupdateState}}      
      />:""}


      <div className="imageDiaplayContainaer">
        {
          imageDta.map((data,inx)=>{
            return (
                <Image key={inx*0.0551} data={data}
                data2 = {{updateStae, setupdateState}}  />
            )
          })
        }
      </div>
      {loderStatus ? <Loader/>: "" }

      
    </div>
  )
}

export default Home
