import { useState } from "react";
export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing((Editing) => !isEditing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let nameStore = <span className="player-name">{playerName} </span>;
  if (isEditing) {
    nameStore = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {nameStore}
          <span className="player-symbol">{symbol} </span>
          <button onClick={handleEditClick}>
            {isEditing ? "Save" : "Edit"}
          </button>
        </span>
      </li>
    </>
  );
}
