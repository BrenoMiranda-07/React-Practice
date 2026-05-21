export default function ListPicker({ values }) {
    const randIdx = Math.floor(Math.random() * values.length);
    const randElement = values[randIdx];
    return (
        <>
            <p>The List Of Values: {values}</p>
            <p>Random Element Is: {randElement}</p>
        </>
    );
}