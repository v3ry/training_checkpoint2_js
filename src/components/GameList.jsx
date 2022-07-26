import axios from "axios";
import React,{useState,useEffect} from "react";
import Game from "./Game";

function GameList() {
    const [apiData, setApiData] = useState([])
    const [filter, setFilter] = useState(false)
    useEffect(() => {
    axios
    .get('https://apis.wilders.dev/wild-games/games/')
    .then(data => setApiData(data.data))
    //gestion des erreurs
    .catch(error => console.warn('Authorization failed : ' + error.message));
    },[])

    const removeGame = () => {
        setFilter(!filter)
    }
    const filterList = (val) => {
        console.log();
        if (filter === true){
            return val.rating>4.5 ? true : false
        }else{
            return true
        }
    }

    return (
      <div className="GameList">
        <button onClick={removeGame}>Remove Shit Game</button>
        {apiData && apiData
        .filter((val) => filterList(val))
        .map((game,index)=>(
            <Game key={"list"+index} val={game} />
            // console.log(game)
        ))}
        <Game/>
      </div>
    );
  }
  
  export default GameList;
  