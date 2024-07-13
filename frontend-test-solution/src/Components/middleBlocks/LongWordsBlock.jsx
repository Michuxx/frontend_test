import "../../CSS/LongWordsBlock.css";

export default function LongWordsBlock({
  showPanel,
  onShowName,
  text,
  onReset,
}) {
  return (
    <div className="thirdContainer">
      <p className="cuttingText">
        <b>BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIE PRZYTNIE ...</b>
      </p>
      <p className="loremIpsum">{text}</p>
      <input type="checkbox" name="" className="expand-btn" />
      <div className="bottomPanel">
        {showPanel ? (
          <div className="showPanel">
            <ul>
              <li onClick={onReset}>zresetuj ustawienia</li>
              <li onClick={onShowName}>pokaż dane osobowe</li>
            </ul>
          </div>
        ) : undefined}
      </div>
    </div>
  );
}
