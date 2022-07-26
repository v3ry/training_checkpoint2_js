function Game(props) {
    return (
      <div className="Game">
        {props.val&& console.log(props.val.slug)}
        {props.val&& 
        <div>
            <h2>{props.val&&props.val.slug.split("-").join(' ')}</h2>
            <img src={props.val.background_image} alt="" width={"200px"}/>
        </div>
    }
      </div>
    );
  }
  
  export default Game;
  