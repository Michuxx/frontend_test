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
            <span onClick={onReset}> &gt; zresetuj ustawienia</span>
            <span onClick={onShowName}>&gt; pokaż dane osobowe</span>
          </div>
        ) : undefined}
        <button className="show-btn" onClick={onClick}>
          POKAŻ
        </button>
      </div>
    </footer>
  );
}
