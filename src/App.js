import "./App.css";
import { useState , useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Navi from "./components/Navi";
import SongList from "./components/SongList";
import Heart from "react-heart";

function App() {
  const [songs, setSongs] = useState([
    {
      id: uuidv4(),
      title: "Kendrick Lamar – N95",
      genre: "Hip-Hop",
      imageURL:
        "https://i1.sndcdn.com/artworks-5FsGAyeOb3il6PhJ-AhlPIQ-t500x500.jpg",
    },
    {
      id: uuidv4(),
      title: "Steve Lacy – Bad Habit",
      genre: "R&B",
      imageURL: "https://m.media-amazon.com/images/I/51Q6X3QWYsL.jpg",
    },
    {
      id: uuidv4(),
      title: "Beyoncé – Break My Soul",
      genre: "House music",
      imageURL:
        "https://images.genius.com/f594f5ee5723b63d503f52fc1aaa243d.800x800x1.png",
    },

    {
      id: uuidv4(),
      title: "Cazzu - Nada",
      genre: "Latin Urbano",
      imageURL:
        "https://i1.sndcdn.com/artworks-000546968604-g3ji4w-t500x500.jpg",
    },
    {
      id: uuidv4(),
      title: "AVEYRO AVE - ELEVATOR 3",
      genre: "Electronic/Rap",
      imageURL:
        "https://images.genius.com/5da72aeb8f98cce6f9c1dae1351cf37e.520x520x1.jpg",
    },
    {
      id: uuidv4(),
      title: "EL KATIBA - 9nedel | قنادل ",
      genre: "Hip-Hop/Rap",
      imageURL:
        "https://static.qobuz.com/images/covers/fa/jr/z5zz3aj7cjrfa_600.jpg",
    },
    {
      id: uuidv4(),
      title: "Billie Eilish - lovely",
      genre: "Dance/Electronic",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BYTRkNGMzMjgtY2MwZC00M2E1LTg5NTktYmUwNDg0NDM3YmUyXkEyXkFqcGdeQXVyMTI4Nzg5MDA@._V1_.jpg",
    },
    {
      id: uuidv4(),
      title: "The Weeknd – Less Than Zero",
      genre: "Alternative/Indie",
      imageURL:
        "https://i1.sndcdn.com/artworks-X190cqwUnxrfL1lv-4e4dTg-t500x500.jpg",
    },
    {
      id: uuidv4(),
      title: "Adele - Hello",
      genre: "Alternative/Indie, Pop",
      imageURL:
        "https://i1.sndcdn.com/artworks-000140962704-66h431-t500x500.jpg",
    },
    {
      id: uuidv4(),
      title: "ZAYN - Dusk Till Dawn",
      genre: " R&B/Soul",
      imageURL:
        "https://i1.sndcdn.com/artworks-pqLsyoyCkiVRrjNw-XmJPzQ-t500x500.jpg",
    },
    {
      id: uuidv4(),
      title: "Halsey - Without Me",
      genre: "R&B, Pop",
      imageURL:
        "https://i.scdn.co/image/ab67616d0000b273c42acc1b86597285c2c79559",
    },

    {
      id: uuidv4(),
      title: "Harry Styles – As It Was",
      genre: "Funk",
      imageURL:
        "https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14",
    },
    {
      id: uuidv4(),
      title: " Ethel Cain – American Teenager",
      genre: "Rock",
      imageURL:
        "https://i.scdn.co/image/ab67616d0000b273c42acc1b86597285c2c79559",
    },
    {
      id: uuidv4(),
      title: "Two Shell – Home",
      genre: "Electronic",
      imageURL: "https://f4.bcbits.com/img/a3480666971_10.jpg",
    },
  ]);



  const [active, setActive] = useState(false);
  const [inputGenre, setInputGenre] = useState("");
  const [inputSearch, setInputSearch] = useState("");
    const [filtredSongs, setFiltredSongs] = useState(songs)
    useEffect(() => {
      setFiltredSongs(
        songs.filter(
          (song) =>
            song.title
              .toLocaleLowerCase()
              .includes(inputSearch.toLocaleLowerCase()) &&
            song.genre.toLowerCase().includes(inputGenre.toLowerCase()) &&
            (!active || song.isLiked)
        )
      );
    }, [inputSearch, inputGenre, songs,active]);

    






  return (
    <div className="App">
      <Navi
        songs={songs}
        setSongs={setSongs}
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
        inputGenre={inputGenre} 
        setInputGenre = {setInputGenre}
      />
      <SongList songs={filtredSongs} />
    </div>
  );
}

export default App;
