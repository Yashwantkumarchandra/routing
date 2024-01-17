import { Link } from "react-router-dom";



export function Invalid (){
    return(
        <div>

            <h1>Sorry!!! THis path is Not Found</h1>

           <Link to="/"  className="btn btn-success">Click to home page</Link> 

        </div>
    )
}