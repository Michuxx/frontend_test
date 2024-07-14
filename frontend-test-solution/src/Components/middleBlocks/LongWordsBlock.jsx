import "../../CSS/LongWordsBlock.css";

export default function LongWordsBlock({ text }) {
  return (
    <div className="thirdContainer">
      <p className="cuttingText">
        <b>BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIE PRZYTNIE ...</b>
      </p>
      <p className="loremIpsum">{text}</p>
      {text.length > 0 ? (
        <input type="checkbox" name="" className="expand-btn" />
      ) : null}
      <div className="bottomPanel"></div>
    </div>
  );
}
