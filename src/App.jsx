import { useState } from "react";

import "./App.css";
import usePasswordGenerator from "./hooks/use-password-generator";
import PasswordStrengthIndicator from "./components/StrengthChecker";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import AlertContent from "./components/AlertContent";

function App() {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);
  const [copied, setCopied] = useState(false);

  const handleCheckboxChange = (i) => {
    const updatedState = [...checkboxData];
    updatedState[i].state = !updatedState[i].state;
    setCheckboxData(updatedState);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const { password, errorMsg, generatePassword } = usePasswordGenerator();

  return (
    <div>
      <h1>Online Password Generator</h1>
      <div className="content">
        <AlertContent password={password} />
      </div>
      <div className="container">
        {/* Password text and copy */}

        {password && (
          <div className="header">
            <div className="title">{password}</div>
            <Button
              text={copied ? "copied" : "copy"}
              customClass="cpybtn"
              onClick={handleCopy}
            />
          </div>
        )}

        {/* character length */}
        <div className="charLength">
          <span>
            <label>Character Length</label>
            <label>{length}</label>
          </span>
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        {/* checkboxes */}
        <div className="checkboxs">
          {checkboxData.map((checkbox, index) => {
            return (
              <Checkbox
                key={index}
                title={checkbox.title}
                state={checkbox.state}
                onChange={() => handleCheckboxChange(index)}
              />
            );
          })}
        </div>
        {/* strength */}
        <PasswordStrengthIndicator password={password} />
        {/* Error Handling */}
        {errorMsg && <div className="errorMsg">{errorMsg}</div>}
        {/* Generate Button */}
        <Button
          text={"Generate Password"}
          customClass={"generateBtn"}
          onClick={() => generatePassword(checkboxData, length)}
        />
      </div>
    </div>
  );
}

export default App;
