import { useState } from "react";
import "./Votes.css"

export function Votes() {

    const [vanilla, setVanilla] = useState(0);
    const [chocolate, setChocolate] = useState(0);
    const [strawberry, setStrawberry] = useState(0);

    const total = vanilla + chocolate + strawberry;
    const vanillaPerc = total > 0 ? Math.round(vanilla / total * 100) : 0;
    const ChocolatePerc = total > 0 ? Math.round(chocolate / total * 100) : 0;
    const strawberryPerc = total > 0 ? Math.round(strawberry / total * 100) : 0;

    return (
        <div>
            <h2>Vote Here</h2>

            <button onClick={() => setVanilla(vanilla + 1)}>Vanilla</button>
            <button onClick={() => setChocolate(chocolate + 1)}>chocolate</button>
            <button onClick={() => setStrawberry(strawberry + 1)}>strawberry</button>

            <div>
                <label>Vanilla  {vanilla} {vanillaPerc} </label>
                <div style={ {
                    width: `${vanillaPerc}%`
                }} className="Progress vanilla"></div>
            </div>

            <div>
                <label>Chocolate  {chocolate} {ChocolatePerc} </label>
                <div style={ {
                    width: `${ChocolatePerc}%`
                }} className="Progress chocolate"></div>
            </div>

            <div>
                <label>Strawberry  {strawberry} {strawberryPerc} </label>
                <div style={ {
                    width: `${strawberryPerc}%`
                }} className="Progress strawberry"></div>
            </div>
        </div>
    )
}



