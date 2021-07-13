import React from "react";
import "./style.css";

function Game({game, onRemove}) {
    const { initial, answer, id } = game; 
    return (
        <div className="list-item">
            <div>
                <b className="text-initial">{initial}</b><span className="text-answer">{answer}</span>
            </div>
            <button className="list-button"> <span className="button-text" onClick={() => onRemove(id)}> X </span></button>
        </div>
    )
}

function GameList({ games, onRemove }) {
    return (
        <div className="list-container">
            {
                games.map(game => (
                    <Game game={game} key={game.id} onRemove={onRemove} />
                ))
            }
        </div>
        
    )
}

export default GameList;