import axios from "axios"
import { useFormik } from "formik"
import { useEffect } from "react";
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"


export function Login(){
    const [ cookies , setCookies] = useCookies('username');
    const navigate = useNavigate()
    useEffect(()=>{
        if(cookies.username!==null){
            navigate('/videos')
        }
    })
    const formik = useFormik({
        initialValues:{
            'username':'',
            'password':''
        },
        onSubmit:(user=>{
            axios.get('http://localhost:4000/getuser').then(response=>{
                console.log(response)
                const foundUser = response.data.find(item => item.username === user.username);
                if(foundUser && foundUser.password === user.password){
                   setCookies('username',user.username,[{expires:new Date('2024-01-20')}])
                    console.log('valid credentials')
                    navigate('/videos');
                } else{
                    navigate('/invalid')
                }
            })
        })
    })

    return (
        <div>

           <form className=" mt-4 w-25" onSubmit={formik.handleSubmit}>
            <label htmlFor="username"className="form-label">User Name</label>
                <input type="text" name="username"  id="username" className="form-control" onChange={formik.handleChange} required/>
                <label htmlFor="password"className="form-label">Password</label>
                <input type="password" name="password"  id="password" className="form-control" onChange={formik.handleChange} required/>
                <button type="submit" className="btn btn-success">Login</button>
            </form> 

        </div>
    )
}