import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import style from './Pc.module.scss'
export default function Pc() {
    let [recomendedGamed, setRecomendedGamed] = useState([]);


  let getRecommendedGame=async ()=>{
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: {platform: 'pc'},
        headers: {
          'X-RapidAPI-Key': '93e03a98d2msh028f2497b0ae015p1993fejsncab5244ec9a7',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
          setRecomendedGamed(response.data)
      }).catch(function (error) {
          console.error(error);
      });
}



  useEffect(() => {
    getRecommendedGame()

  }, [])


  return (
    <>
     { recomendedGamed.length > 0 ? <div className="container">
    <div className="recomm my-5">
      <div className="row gy-2 gx-2">
              {recomendedGamed.filter((elem,index)=>  index < 20 ).map((element,index)=> 
                <div className={`col-md-3`} key={index}>
                  <div className={`item  rounded-4 px-2  py-2 ${style.cardGame}`}>
                    <img className='w-100' src={element.thumbnail} alt='game-item' />
                    <div className="header-game  d-flex justify-content-between align-items-center">
                    <h3 className='fs-4'>{element.title}</h3>
                    <button className='btn btn-info'>free</button>
                    </div>
                  </div>
                </div>
              )}
    
            </div>
       
      </div>
    </div> : <LoadingScreen/>}
    
</>
  )
}
