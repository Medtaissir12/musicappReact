import React , {useState} from 'react'
import { Button} from "react-bootstrap";
import Heart from "react-heart";

const SongCard = ({song}) => {

    const [active, setActive] = useState(false);
    const handlePlay = () => {
      window.open(`https://youtube.com/search?q=${song.title}`, "_blank");
    };


  return (
    <div className="songCard">
      <h3> {song.title} </h3>
      <img src={song.imageURL} alt={song.title} />
      <p>{song.genre}</p>
      <section className="composant">
        <Button variant="primary" onClick={handlePlay} >
          play
        </Button>
        <Heart
          style={{ width: "2rem" }}
          isActive={active}
          onClick={() => setActive(!active)}
        />
      </section>
    </div>
  );
}

export default SongCard