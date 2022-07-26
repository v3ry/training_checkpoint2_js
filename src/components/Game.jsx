function Game(props) {
    return (
      <div className="Game">
        {props.val&& console.log(props.val)}
        {props.val&& 
        <div>
            <h2>{props.val.name}</h2>
            <img src={props.val.background_image} alt="" width={"200px"}/>
            <p>Released : {props.val.released}</p>
            <p>Rating : {props.val.rating}</p>
            <p>Genre : </p>
            {props.val.genres.map((val,index)=>(
                <p key={"game" + index}>{val.name}</p>
            ))}
        </div>
    }
      </div>
    );
  }
  
  export default Game;
  