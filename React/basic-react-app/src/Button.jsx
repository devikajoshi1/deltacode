function doSomething(){
    console.log("button was clicked");
}

function handleHover(){
    console.log("hover");
}
export default function Button(){
    return(
        <div>
            <button onClick={doSomething}>Click Me</button>
            <br/>
            <button onMouseOver={handleHover}>Hover Over Me</button>
        </div>
    );
}