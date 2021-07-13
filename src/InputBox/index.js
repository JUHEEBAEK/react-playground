import React from "react";
import "./style.css";
function InputBox({initial, answer, onChange, onCreate, onClear}) {
    return (
        <div className="input-container">
            <input className="input-box" type="text" name="initial" value={initial} onChange={onChange} placeholder="초성" />
            <input className="input-box" type="text" name="answer" value={answer} onChange={onChange} placeholder="답" />
            <button className="button-default button-save" onClick={onCreate}> SAVE </button>
            <button className="button-default button-clear" onClick={onClear}> CLEAR </button>
        </div>
    )
}

export default InputBox;