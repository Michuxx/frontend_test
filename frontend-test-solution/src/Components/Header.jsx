import "../CSS/Header.css";
import Photo from "../../public/iconUnhover.png";

export default function Header({ name }) {
  return (
    <header>
      <div className="circle">
        <a href="/">
          <img src={Photo} alt="HTML5" />
        </a>
      </div>
      <div className="candidate">
        <p className="longWord">
          Zadanie <b>rekrutacyjne</b> <br />
        </p>
        {name ? <p className="candidateName">Michał Szymczak</p> : null}
      </div>
    </header>
  );
}
