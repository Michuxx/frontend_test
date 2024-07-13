import "../../CSS/LongWordsBlock.css";

export default function LongWordsBlock({ text }) {
  return (
    <div className="thirdContainer">
      <p className="cuttingText">
        <b>BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIE PRZYTNIE ...</b>
      </p>
      <p className="loremIpsum">{text}</p>
      <input type="checkbox" name="" className="expand-btn" />
      <div className="bottomPanel"></div>
    </div>
  );
}
