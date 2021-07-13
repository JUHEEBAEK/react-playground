import React from "react";
import "./style.css";

function Game({game, onSelect, onRemove}) {
    const { initial, answer, id } = game;
    return (
        <div className="list-item" onClick={() => onSelect(id)}>
            <div>
                <b className="text-initial">{initial}</b><span className="text-answer">{answer}</span>
            </div>
            <button className="list-button"> <span className="button-text" onClick={() => onRemove(id)}> X </span></button>
        </div>
    )
}

function GameList({ games, onSelect, onRemove }) {
    return (
        <div className="list-container">
            {
                games.map(game => (
                    <Game game={game} key={game.id} onSelect={onSelect} onRemove={onRemove} />
                ))
            }
        </div>
        
    )
}

export default GameList;