import { useState ,useEffect} from "react"

const StopWatch = () => {
    const [state, setState] = useState(false);
    const [time, setTime] = useState(0);
    let interval;

    const start = () => {
    setState(true);
    };

    const stop = () => {
    setState(false);
    clearInterval(interval);
    
    };
    const reset = () => {
        setState(false);
        clearInterval(interval);
        setTime(0)
    };

    useEffect(() => {
        if (state) {
          interval = setInterval(() => setTime(prevTime => prevTime+1),1000)
        }
        return () => clearInterval(interval);
      }, [state]);

  return (
    <>
    <div className="watch">
      <h3>Stop Watch</h3>
    </div>
    <div className="time">
    <h2>{time}</h2>
    </div>
    <div className="btn-position">
    <button type="button" className="buttons" onClick={start}>Start</button>
    <button type="button" className="buttons" onClick={stop}>Stop</button>
    <button type="button" className="buttons" onClick={reset}>Reset</button>
    </div>

    </>
    
  )
}

export default StopWatch
