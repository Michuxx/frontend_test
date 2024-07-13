import "../CSS/Footer.css";

export default function Footer({ onClick }) {
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
        <button className="show-btn" onClick={onClick}>
          POKAŻ
        </button>
      </div>
    </footer>
  );
}
