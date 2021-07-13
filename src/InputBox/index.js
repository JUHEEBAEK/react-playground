import React from "react";
import "./style.css";
function InputBox({initial, answer, onChange, onCreate}) {
    return (
        <div className="input-container">
            <input className="input-box" type="text" name="initial" value={initial} onChange={onChange} placeholder="초성" />
            <input className="input-box" type="text" name="answer" value={answer} onChange={onChange} placeholder="답" />
            <button className="button-save" onClick={onCreate}> SAVE </button>
        </div>
    )
}

export default InputBox;