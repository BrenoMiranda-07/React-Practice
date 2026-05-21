function handleClick() {
    console.log('Clicked!')
}

function handleHover() {
    console.log("Hovered!")
}

export default function Clicker() {
    return (
        <div>
            <p>Click The Button & Hover</p>
            <button onClick={handleClick}>Clicker</button>
            <p onMouseOver={handleHover}>Hover Over Me</p>
        </div>
    )
}