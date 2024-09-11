import React, { useState, useEffect, useRef } from "react";

function Stopwatch(){

        const [time,setTime] = useState(0); 
        const [isRunning,setIsRunning] = useState(false);
        const timerRef = useRef(null);

        const formatTime = (time) => {
            const min = Math.floor(time / 60);
            const sec = time % 60;
            return `${min}:${sec < 10 ? "0" : ""}${sec}`;
        };

        const handleStart = () => {
            if (!isRunning) {
              setIsRunning(true);
              timerRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
              }, 1000);
            }
          };

          const handleStop = () => {
            setIsRunning(false);
            clearInterval(timerRef.current);
          };

          const handleReset = () => {
            clearInterval(timerRef.current);
            setIsRunning(false);
            setTime(0);  // Reset time to 0
          };

          useEffect(() => {
            return () => clearInterval(timerRef.current);
          }, []);

    return (
        <div>
            <p>Time : {formatTime(time)}</p>
            <div>
                {!isRunning ? (
                    <button onClick={handleStart} >Start</button>
                ) : (
                    <button onClick={handleStop} >Stop</button>
                )}
                    <button onClick={handleReset} >Reset</button>
            </div>
        </div>
    );
}

export default Stopwatch;