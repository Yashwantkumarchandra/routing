import { BrowserRouter,Link,Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { Register } from "./register";
import { Videos } from "./videos";
import { Login } from "./login";
import { Invalid } from "./invalid";




export  function Index(){



    return(
        <div>
            <BrowserRouter>
                <header className=" bg-success d-flex justify-content-center text-white">
                    <h1> Authentication/authorization</h1>
                </header>
                <div className="row ">
                        <nav className="col-3 d-flex mt-5 align-items-center justify-content-center flex-column ">
                            <Link to="/" className="btn btn-dark w-25 mb-2">Home</Link>
                            <Link to="/login" className="btn btn-dark w-25 mb-2">Login</Link>
                            <Link to="/register" className="btn btn-dark w-25 mb-2"> Register</Link>
                            <Link to="/videos" className="btn btn-dark w-25 mb-2">Videos</Link>
                        </nav>
                    <div className="col-9">
                    <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="login" element={<Login/>}></Route>
                            <Route path="register" element={<Register />}></Route>
                            <Route path="videos" element={<Videos />}></Route>
                            <Route path="*" element={<Invalid />}></Route>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}