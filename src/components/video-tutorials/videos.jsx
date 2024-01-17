import { useEffect } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";

export function Videos(){
    const [cookies,setCookie,removeCookie] = useCookies(['username']);
    const navigate = useNavigate()
    useEffect(()=>{
        if(cookies.username==null){
            navigate('/login')
        }
    },[])

    function handleSignoutClick(){
        removeCookie('username');
        navigate('/login')
    }

    return (
        <div>
            <div>
                <iframe src="https://www.youtube.com/embed/ciz2UaifaNM" frameborder="0" allowFullScreen title="youtube1"></iframe>
            </div>
            <div>
                <iframe src="https://www.youtube.com/embed/uE925hp9KDk" frameborder="0" allowFullScreen title="tutorial2"></iframe>
            </div>
            <button onClick={handleSignoutClick} className="btn btn-link"> Signout </button> 
        </div>
    )
}