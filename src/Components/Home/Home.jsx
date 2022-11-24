import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import style from './Home.module.scss'

export default function Home() {
  let [recomendedGamed, setRecomendedGamed] = useState([]);


  let getRecommendedGame=async ()=>{
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
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

// let getThreeGamed = ()=>{
//   if(recomendedGamed.length > 0){
//     let x = [...recomendedGamed];
//     let h = x.slice(1,3)
//     console.log(h)
//   }
// }
  
  return (
    <>
    <div className={`${style.header} text-center m-auto py-5`}>
      <h2 className='fs-1'>Find & track the best <span className='text-info'>free-to-play</span> games!</h2>
    <p className='py-2 fs-5 text-muted'>Track what you've played and search for what to play next! Plus get free premium loot!</p>
    <button className={`py-2 my-2 btn ${style.browsBtn}`}>Browse Games</button>
    </div>
    <div className="container">
    <div className="recomm my-5">
      <p className='text-muted fs-2 my-3'><i class="fa-solid fa-robot pe-2"></i>Personalized Recommendations</p>
      <div className="row gy-2 gx-2">
        {recomendedGamed.length > 0 ?recomendedGamed.filter((elem,index)=>  index < 3 ).map((element,index)=> 
                <div className={`col-md-4  `} key={index}>
                  <div className={`item  rounded-4 px-2  py-2 ${style.cardGame}`}>
                    <img className='w-100' src={element.thumbnail} alt='game-item' />
                    <div className="header-game  d-flex justify-content-between align-items-center">
                    <h3>{element.title}</h3>
                    <button className='btn btn-info'>free</button>
                    </div>
                  </div>
                </div>
              ) : <LoadingScreen/>}
         
    
            </div>
       
      </div>
    </div>

   
    
    </>
  )
}
