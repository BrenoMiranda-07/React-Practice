import { useState } from "react";

export default function Toggler() {
    const [isHappy, setIsHappy] = useState(true);

    const toggleIsHappy = () => setIsHappy(!isHappy);

    return (
        <p onClick={toggleIsHappy}>
            {isHappy ? "P" : "B"}
        </p>
    );
}