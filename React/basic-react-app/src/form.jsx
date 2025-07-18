function handleFormSubmit(event){
    event.preventDefault();
    console.log("form was submit")
}

export default function Form(){
    return(
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    );
}