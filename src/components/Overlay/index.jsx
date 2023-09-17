import HeartIcon from "../HeartIcon";
import "./overlay.css";

export default function Overlay() {
  return (
    <>
      <div className="title-wrapper">
        <h1>Frustration Nation</h1>
        <h2>A game about printers to make you pissed!</h2>
      </div>
      <p className="highlight">Game by Zeina Saade.</p>
      <div className="credits">
        <p>
          Made with <HeartIcon className="heart" /> by{" "}
          <a href="https://brunoborta.github.io/">Bruno Borta</a>.
        </p>
      </div>
    </>
  );
}
