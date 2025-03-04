import React, { useEffect, useRef } from "react";
import { ButtonNames } from "../Engine/GlobalDefinitions";


import Button from "./Button";

import "./KeyPad.css";
import "./Button.css";

interface KeyPadProps {
  onButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onCommandButtonClick: (text: string) => void;
  currentlyEditing: boolean;
} // interface KeyPadProps

function KeyPad({ onButtonClick, onCommandButtonClick, currentlyEditing }: KeyPadProps) {

  const keypadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the ref is set
    if (keypadRef.current) {
      const handleKeyPress = (event: KeyboardEvent) => {
        let key = event.key;

        if ("0123456789+-*/().".includes(key)) {
          onButtonClick({ currentTarget: { textContent: key } } as React.MouseEvent<HTMLButtonElement>);
        } else if (key === "Backspace") {
          onCommandButtonClick(ButtonNames.clear);
        }
      };

      const keypadEl = keypadRef.current;
      keypadEl.addEventListener("keydown", handleKeyPress);

      // Return a cleanup function to remove the event listener
      return () => {
        keypadEl.removeEventListener("keydown", handleKeyPress);
      };
    }
  }, [onButtonClick, onCommandButtonClick]); 

  function getDoneButtonClass() {
    if (currentlyEditing) {
      return "button-edit-end";
    }
    return "button-edit-start";
  } // getDoneButtonClass

  let doneButtonText = currentlyEditing ? ButtonNames.done : ButtonNames.edit;

  // the buttons use one of three classes
  // numberButton, operatorButton, and otherButton
  return (
    <div className="buttons" ref={keypadRef} tabIndex={0}>
      <div className="buttons-row">


        <Button
          text="sin"
          isDigit={true}
          onClick={onButtonClick}
          className="button-operator"
          dataTestId="sin-button"
        />
        <Button
          text="cos"
          isDigit={true}
          onClick={onButtonClick}
          className="button-operator"
          dataTestId="cost-button"
        />
        <Button
          text="tan"
          isDigit={true}
          onClick={onButtonClick}
          className="button-operator"
          dataTestId="tan-button"
        />
        <Button
          text={"asin"}
          isDigit={true}
          onClick={onButtonClick}
          className="button-operator"
          dataTestId="asin-button"
        />
        <Button
          text={"acos"}
          isDigit={false}
          onClick={onButtonClick}
          className="button-operator"
          dataTestId="acos-operator"
        />
        <Button
          text={"atan"}
          isDigit={false}
          onClick={onButtonClick}
          className="button-operator"
          dataTestId="atan-button"
        />
      </div>

      <div className="buttons-row">


        <Button
          text="+/-"
          isDigit={true}
          onClick={onButtonClick}
          className="button-operator"
          dataTestId="+/--button"
        />
        <Button
          text="sqr"
          isDigit={true}
          onClick={onButtonClick}
          className="button-operator"
          dataTestId="sqrt-button"
        />
        <Button
          text="sqrt"
          isDigit={true}
          onClick={onButtonClick}
          className="button-operator"
          dataTestId="sqr-button"
        />
        <Button
          text={"cube"}
          isDigit={true}
          onClick={onButtonClick}
          className="button-operator"
          dataTestId="asin-button"
        />
        <Button
          text={"cuberoot"}
          isDigit={false}
          onClick={onButtonClick}
          className="button-operator"
          dataTestId="acos-operator"
        />
        <Button
          text={"rand"}
          isDigit={false}
          onClick={onButtonClick}
          className="button-operator"
          dataTestId="atan-button"
        />
      </div>
      <div className="buttons-row">


        <Button
          text="7"
          isDigit={true}
          onClick={onButtonClick}
          className="button-number"
          dataTestId="seven-button"
        />
        <Button
          text="8"
          isDigit={true}
          onClick={onButtonClick}
          className="button-number"
          dataTestId="eight-button"
        />
        <Button
          text="9"
          isDigit={true}
          onClick={onButtonClick}
          className="button-number"
          dataTestId="nine-button"
        />
        <Button
          text={ButtonNames.allClear}
          isDigit={true}
          onClick={() => onCommandButtonClick(ButtonNames.allClear)}
          className="button-control"
          dataTestId="all-clear-button"
        />
        <Button
          text={ButtonNames.clear}
          isDigit={false}
          onClick={() => onCommandButtonClick(ButtonNames.clear)}
          className="button-control"
          dataTestId="clear-button"
        />
      </div>

      <div className="buttons-row">
        <Button
          text="4"
          isDigit={true}
          onClick={onButtonClick}
          className="button-number"
          dataTestId="four-button"
        />
        <Button
          text="5"
          isDigit={true}
          onClick={onButtonClick}
          className="button-number"
          dataTestId="five-button"
        />
        <Button
          text="6"
          isDigit={true}
          onClick={onButtonClick}
          className="button-number"
          dataTestId="six-button"
        />
        <Button
          text="*"
          isDigit={false}
          onClick={onButtonClick}
          className="button-operator"
          dataTestId="multiply-button"
        />
        <Button
          text="/"
          isDigit={false}
          onClick={onButtonClick}
          className="button-operator"
          dataTestId="divide-button"
        />
      </div>

      <div className="buttons-row">
        <Button
          text="1"
          isDigit={true}
          onClick={onButtonClick}
          className="button-number"
          dataTestId="one-button"
        />
        <Button
          text="2"
          isDigit={true}
          onClick={onButtonClick}
          className="button-number"
          dataTestId="two-button"
        />
        <Button
          text="3"
          isDigit={true}
          onClick={onButtonClick}
          className="button-number"
          dataTestId="three-button"
        />
        <Button
          text="+"
          isDigit={false}
          onClick={onButtonClick}
          className="button-operator"
          dataTestId="add-button"
        />
        <Button
          text="-"
          isDigit={false}
          onClick={onButtonClick}
          className="button-operator"
          dataTestId="subtract-button"
        />

      </div>

      <div className="buttons-row">
        <Button
          text="0"
          isDigit={true}
          onClick={onButtonClick}
          className="button-number"
          dataTestId="zero-button"
        />
        <Button
          text="."
          isDigit={false}
          onClick={onButtonClick}
          className="button-number"
          dataTestId="decimal-button"
        />
        <Button
          text="("
          isDigit={false}
          onClick={onButtonClick}
          className="button-number"
          dataTestId="left-parenthesis-button"
        />
        <Button
          text=")"
          isDigit={false}
          onClick={onButtonClick}
          className="button-number"
          dataTestId="right-parenthesis-button"
        />
        <Button
          text={doneButtonText}
          isDigit={true}
          onClick={() => onCommandButtonClick(ButtonNames.edit_toggle)}
          className={(getDoneButtonClass())}
          dataTestId="edit-toggle-button"
        />
      </div>

    </div>
  );
} // KeyPad

export default KeyPad;
