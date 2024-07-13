import "../../CSS/FunctionalBlock.css";

export default function FunctionalBlock({ onAdd, onReplace }) {
  return (
    <div className="secondContainer">
      <div className="secondBlockWord">
        <p>
          <b>BLOK DRUGI</b>
        </p>
      </div>
      <div className="buttonBlock">
        <div className="buttonReplace">
          <button className="func-btn" onClick={onReplace}>
            ZASTĄP
          </button>
        </div>
        <div className="buttonAdd">
          <button className="func-btn" onClick={onAdd}>
            DOKLEJ
          </button>
        </div>
      </div>
    </div>
  );
}
