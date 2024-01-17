import axios from "axios";
import {  useFormik } from "formik"
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


export function Register (){

  const[cookies] = useCookies(['username'])
    const [users,setUsers] = useState([]);
    const [userError,setUserError] = useState('');
    const [validClass,setValidClass] = useState('')

    let navigate = useNavigate();
    useEffect(()=>{
      if(cookies.username!==null){
          navigate('/videos')
      }
  })
    const formik = useFormik({
      initialValues:{
        "userId":'',
        "userName":'',
        "password":''
      },
      onSubmit : (user) => {
        axios.post('http://localhost:4000/registerUser',user);
        alert("registered successfully");
        navigate("/login");
      }
    })

      useEffect(()=>{
        axios.get("http://localhost:4000/getuser")
        .then(response =>{
          setUsers(response.data)
        })
      },[])

      function VerifyUserId(e){
        for(var user of users){
          if(user.userId===e.target.value){
              setUserError('userId taken - try another')
              setValidClass('text-danger');
              break;
          }
          else{
            setUserError('User ID available');
            setValidClass('text-succes');
          }
        }
      }

    return (
        <div>
            <form className="w-25 mt-4 " onSubmit={formik.handleSubmit} >
                <div className="mb-3">
                <label htmlFor="userId" className="form-label">UserId</label>
                   <input type="text" className="form-control " name="userId" id="userId"  onKeyUp={VerifyUserId} onChange={formik.handleChange}/>
                   <div className={validClass}>{userError}</div>
                </div>
                <div className="mb-3">
                <label htmlFor="username" className="form-label">UserName</label>
                  <input type="text"  className="form-control " name="username" id="username" onChange={formik.handleChange}/>
                </div>
                  
               <div className="mb-3">
               <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control " name="password" id="password" onChange={formik.handleChange}/>
               </div>
                <button className="btn btn-success">Register</button>
            </form>
        </div>
    )
}