import { useState } from "react";
import "../../CSS/radioBlock.css";
import RadioOption from "./RadioOption";

export default function RadioBlock({
  options,
  selectedOption,
  setSelectedOption,
}) {
  return (
    <section>
      <div className="firstContainer">
        <p className="firstWordParagraph">
          <b>BLOK PIERWSZY</b>
        </p>
        <div className="radioButtons">
          {options.map((o) => (
            <RadioOption
              key={o.id}
              label={o.label}
              id={o.id}
              isSelected={o.id === selectedOption}
              setSelected={setSelectedOption}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
