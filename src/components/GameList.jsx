import axios from "axios";
import React,{useState,useEffect} from "react";
import Game from "./Game";

function GameList() {
    const [apiData, setApiData] = useState([])

      useEffect(() => {
        axios
        .get('https://apis.wilders.dev/wild-games/games/')
        .then(data => setApiData(data.data))
        //gestion des erreurs
        .catch(error => console.warn('Authorization failed : ' + error.message));
      },[])

    return (
      <div className="GameList">
        {/* {console.log(apiData)} */}
        {apiData && apiData.map((game,index)=>(
            <Game key={"list"+index} val={game} />
            // console.log(game)
        ))}
        <Game/>
      </div>
    );
  }
  
  export default GameList;
  