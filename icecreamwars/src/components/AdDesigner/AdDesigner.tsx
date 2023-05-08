import { useState } from "react";
import "./AdDesigner";

export function AdDesigner()  {
    const [flavor, setFlavor] = useState('Vanilla');
    const [isLightTheme, setIsLightTheme] = useState(true);
    const [fontSize, setFontSize] = useState(44);

    const styles = {
        fontSize: `${fontSize}px`
    }

    return (
        <div>
            <h2>Ad Designer</h2>

            <div className={isLightTheme ? 'lightTheme' : 'darkTheme'} style={styles}>
                Vote For {flavor}
            </div>

            <h3>What to support</h3>
            <button disabled={flavor === 'Vanilla'} onClick={() => setFlavor('Vanilla')}>Vanilla</button>
            <button disabled={flavor === 'Chocolate'} onClick={() => setFlavor('Chocolate')}>Chocolate</button>
            <button disabled={flavor === 'Strawberry'} onClick={() => setFlavor('Strawberry')}>Strawberry</button>

            <h3>Color theme</h3>
            <button disabled={isLightTheme} onClick={() => setIsLightTheme(true)}>Light Theme</button>
            <button disabled={!isLightTheme} onClick={() => setIsLightTheme(false)}>Dark Theme</button>

            <h3>Font Size</h3>
            <button onClick={() => setFontSize(fontSize - 1)}>-</button>
            <span>{fontSize}</span>
            <button onClick={() => setFontSize(fontSize + 1)}>+</button>
        </div>
    )
}