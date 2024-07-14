import "../CSS/Footer.css";
import arrow_up from "/arrow_up.png";
import arrow_down from "/arrow_down.png";

export default function Footer({ onClick, onReset, onShowName, showPanel }) {
  return (
    <footer>
      <div className="cia">
        <div className="square"></div>
        <div className="cssWords">
          <p className="specificWord">CSS</p>
          <p className="specificWord">IS</p>
          <p className="specificWord">AWESOME</p>
        </div>
      </div>
      <div className="companyLogo">
        <p>nabthab</p>
      </div>
      <div className="btn">
        {showPanel ? (
          <div className="showPanel">
            <span onClick={onReset}> &gt; zresetuj ustawienia</span>
            <span onClick={onShowName}>&gt; pokaż dane osobowe</span>
          </div>
        ) : undefined}
        <button className="show-btn" onClick={onClick}>
          POKAŻ
          {showPanel ? (
            <img src={arrow_down} alt="arrow_down" className="photo" />
          ) : (
            <img src={arrow_up} alt="arrow_up" className="photo" />
          )}
        </button>
      </div>
    </footer>
  );
}
