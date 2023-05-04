import "./Switch.css"
import { useState } from "react"

export function Switch() {

    const [light, setLight] = useState(false);
    let addClass = "";
    return (

      <div className={light ? "Switch blue " : "Switch"}>
        <h1>Switch</h1>
        <h2>{ light ? "ON":"OFF" }</h2>
        <button onClick={ () => setLight(true)}>On</button>
        <button onClick={ () => setLight(false)}>Off</button>
      </div>

    );
  }