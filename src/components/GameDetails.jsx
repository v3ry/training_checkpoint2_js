import { useParams,useNavigate } from 'react-router-dom';
import React,{useState,useEffect} from "react";
import axios from "axios";

function GameDetails(props) {
    let { id } = useParams();
    const [apiData, setApiData] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
    axios
    .get(`https://apis.wilders.dev/wild-games/games/${id}`)
    .then(data => setApiData(data.data))
    //gestion des erreurs
    .catch(error => console.warn('Authorization failed : ' + error.message));
    },[])

    return (
      <div className="GameDetails">
            {console.log(apiData)}
            {apiData.name&&
            <div>
                <h2>{apiData.name}</h2>
                <img src={apiData.background_image} alt="" width={"200px"}/>
                <p>Released : {apiData.released}</p>
                <p>Rating : {apiData.rating}</p>
                <p>Genre : </p>
                {apiData.genres.map((val,index)=>(
                    <p key={"game" + index}>{val.name}</p>
                ))}
                <p>Screenshots : </p>
                {apiData.short_screenshots.map((val,index)=>(
                    <img src={val.image}key={"game" + index} width={"200px"}/>
                ))}
                <video width="750" height="500" controls >
                    <source src={apiData.clip.clip} type="video/mp4"/>
                </video>
                <button onClick={()=>navigate(-1)}>BACK</button>
            </div>}
      </div>
    );
  }
  
  export default GameDetails;