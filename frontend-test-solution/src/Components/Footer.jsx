import "../CSS/Footer.css";

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
            <ul>
              <span onClick={onReset}> {">"} zresetuj ustawienia</span> <br />
              <span onClick={onShowName}>{">"} pokaż dane osobowe</span>
            </ul>
          </div>
        ) : undefined}
        <button className="show-btn" onClick={onClick}>
          POKAŻ
        </button>
      </div>
    </footer>
  );
}
