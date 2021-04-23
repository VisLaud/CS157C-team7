import React, { useState useRef } from "react";

function Idverify() {
    const STARTING_TIME = 5;

    const [text, setText] = useState("");
    const [time, setTime] = useState(STARTING_TIME);
    const [wordCount, setWCount] = useState(0);
    const [gameState, setGameState] = useState(false);
    const textRef = useRef(null);

    const handleChange = (event) => setText(event.target.value);

    const calculateWords = (text) => {
        const total = text.trim().split(" ");
        return total.filter((word) => word !== "").length;
    };

    const startGame = () => {
        setGameState(true);
        setTime(STARTING_TIME);
        setText("");
        setWCount(0);
        textRef.current.disabled = false;
        textRef.current.focus();
    };

    const endGame = () => {
        setGameState(false);
        setWCount(calculateWords(text));
    };

    //console.log(calculateWords(text));
    return (
        <div>
            <h1>Typing Speed Test</h1>
            <textarea
                ref={textRef}
                value={text}
                onChange={handleChange}
                disabled={!gameState}
            />
            <h4>Time Remaining: {time}</h4>
            <button onClick={startGame} disabled={gameState}>
                Start
      </button>
            <h1>word count: {wordCount}</h1>
        </div>
    );
}

export default Idverify;