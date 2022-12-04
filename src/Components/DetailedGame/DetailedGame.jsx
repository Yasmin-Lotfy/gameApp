import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function DetailedGame() {
  let GameId = useParams();
  const [gameInfo, setGameInfo] = useState({})

  let getDetailedGame= async(id)=>{
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
      params: id,
      headers: {
        'X-RapidAPI-Key': '93e03a98d2msh028f2497b0ae015p1993fejsncab5244ec9a7',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      setGameInfo(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  }
  useEffect(() => {
    getDetailedGame(GameId)
   
  }, [])
  

  return (
      <>
      <div className="container">
        <div className="row my-4">
          <div className="col-md-4">
            <img src={gameInfo.thumbnail} className="w-100 rounded-3" alt="" />
            <div className='d-flex justify-content-between align-items-center my-2'>
              <a className='cardGame text-uppercase border-0 btn btn-info text-muted'target='_blank' href={gameInfo.freetogame_profile_url}>Free</a>
              <a className='btn btn-info text-white text-uppercase fw-bolder px-5 ' target='_blank' href={gameInfo.freetogame_profile_url}>Play Now <i class="fa-solid fa-arrow-right-from-bracket"></i></a>
            </div>
          </div>
          <div className="col-md-8">
            <h2 className='text-muted'>{gameInfo.title}</h2>
            <h5 className='text-muted'>About {gameInfo.title}</h5>
            <p className='text-muted '>{gameInfo.description}</p>
            <h3 className='text-muted'>Minimun System Requirements: </h3>
            <p className='text-muted mb-1'><span className='fw-bolder text-info'>Graphics:</span> {gameInfo.minimum_system_requirements.graphics}</p>
            <p className='text-muted mb-1 '><span className='fw-bolder text-info'>Memory:</span> {gameInfo.minimum_system_requirements.memory}</p>
            <p className='text-muted mb-1'><span className='fw-bolder text-info'>Os:</span> {gameInfo.minimum_system_requirements.os}</p>
            <p className='text-muted mb-1'><span className='fw-bolder text-info'>Processor:</span> {gameInfo.minimum_system_requirements.processor}</p>
            <p className='text-muted mb-1'><span className='fw-bolder text-info'>Storage:</span> {gameInfo.minimum_system_requirements.storage}</p>
            <h3 className='text-muted'>{gameInfo.title} Screenshots</h3>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={gameInfo.screenshots[0].image} class="d-block w-100" alt="screenshots"/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={gameInfo.screenshots[1].image} class="d-block w-100" alt="screenshots"/>
    </div>
    <div className="carousel-item">
      <img src={gameInfo.screenshots[2].image} class="d-block w-100" alt="screenshots"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
            </div>
            <h3 className='text-muted'>Additional Information</h3>


          </div>
        </div>
      </div>

      </> 
 )
}
