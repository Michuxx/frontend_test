import "../CSS/App.css";
import Header from "./Header";
import RadioBlock from "./middleBlocks/RadioBlock";
import FunctionalBlock from "./middleBlocks/FunctionalBlock";
import LongWordsBlock from "./middleBlocks/LongWordsBlock";
import Footer from "./Footer";
import Heading from "./middleBlocks/Heading";
import { useState } from "react";
import data from "../data.json";

function App() {
  const options = [
    {
      id: "FirstOption",
      label: "Opcja Pierwsza",
    },
    {
      id: "SecondOption",
      label: "Opcja Druga",
    },
    {
      id: "RandomOption",
      label: "Opcja losowa",
    },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0].id);
  const [isClicked, setIsClicked] = useState(false);
  const [isShowName, setIsShowName] = useState(false);
  const [text, setText] = useState([]);
  const [indexes, setIndexes] = useState([]);

  const handleShowPanel = () => {
    setIsClicked((event) => !event);
    console.log(isClicked);
  };

  const handleShowName = () => {
    setIsShowName(true);
  };

  const handleAdd = () => {
    if (selectedOption === options[0].id) {
      setText([...text, data[0] + " "]);
      if (!indexes.includes(0)) {
        setIndexes([...indexes, 0]);
      }
    } else if (selectedOption === options[1].id) {
      setText([...text, data[1] + " "]);
      if (!indexes.includes(1)) {
        setIndexes([...indexes, 1]);
      }
    } else {
      let randomId = Math.floor(Math.random() * data.length);

      if (indexes.includes(randomId)) {
        handleAdd();
      } else if (indexes.length === 5) {
        alert("Nie można użyć tej opcji !");
      } else {
        setText([...text, data[randomId] + " "]);

        if (!indexes.includes(randomId)) {
          setIndexes([...indexes, randomId]);
        }
      }
    }
  };

  const handleReplace = () => {
    if (selectedOption === options[0].id) {
      setText([data[0] + " "]);
      setIndexes([0]);
    } else if (selectedOption === options[1].id) {
      setText([data[1] + " "]);
      setIndexes([1]);
    } else {
      let randomId = Math.floor(Math.random() * data.length);
      setText([data[randomId] + " "]);
      setIndexes([data[randomId]]);
    }
  };

  const handleReset = () => {
    setIndexes([]);
    setText([]);
    setIsShowName(false);
    setIsClicked(false);
  };

  return (
    <div className="container">
      <Header name={isShowName} />
      <Heading />
      <div className="middleBlock">
        <div className="rensposive">
          <RadioBlock
            options={options}
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption}
          />
          <FunctionalBlock onAdd={handleAdd} onReplace={handleReplace} />
        </div>
        <LongWordsBlock text={text} />
      </div>
      <Footer
        showPanel={isClicked}
        onClick={handleShowPanel}
        onShowName={handleShowName}
        onReset={handleReset}
      />
    </div>
  );
}

export default App;
