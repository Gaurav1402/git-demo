// If error occured it dont show blank, it shows an error message on webpage.
function Demo() {
    throw new Error("Error-");
    return (
        <><p>This is demo component..</p></>
    )
}
export default Demo
