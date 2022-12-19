import "./Home.css";
import Film from "../components/film/Film";

function Home() {
  const films = [
    {
      title: "el lobo de wall street",
      description: "asdklnasdljasolndas wall street",
      review: "5*",
    },
    {
      title: "Un ciudadano ejemplar",
      description: "lorem impsum blasd",
      review: "4*",
    },
    {
      title: "La pesadilla de React",
      description: "es broma es la ostia",
      review: "5*",
    },
  ];

  /*function avisam() {
    alert("Ei, has clicat!");
  }*/

  const avisam = (text) => {
    alert(text);
  };

  return (
    <>
      <button onClick={() => avisam("has clicat nou")}>Ei, avisam</button>
      <h1>Benvinguts al TCM Netflix</h1>
      <h2>Películes destacades: </h2>
      {films.map((film) => {
        return (
          <Film
            title={film.title}
            description={film.description}
            review={film.review}
          />
        );
      })}
    </>
  );
}

export default Home;
