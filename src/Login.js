import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { API } from './Global';

export default function Login() {
    const navigate=useNavigate();
    const LoginValidationSchema = yup.object({
        email: yup.string().required().email(),
        password: yup.string().required(),
    });
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: LoginValidationSchema,
        onSubmit: (values) => {
            login(values);
        },

    });
    const login = async (values)=>{
        let data=await fetch(`${API}/login`,{
            method:"POST",
            body:JSON.stringify(values),
            headers:{"Content-Type":"application/json"},
        })
        if(data.status===400){
            const result=await data.json();
            alert(result.message);
        }
        else{
            const result=await data.json();
            console.log(result.token)
            localStorage.setItem("storetoken",result.token)
            alert("Successfully logged in");
            navigate("/portal/movie");
        }
    }
    return (
        <form className='login' onSubmit={formik.handleSubmit}>
            <h1>Login</h1>
            <TextField id="outlined-basic"
                label="Email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"
                onBlur={formik.handleBlur}
                error={formik.touched.email && formik.errors.email}
                helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}
            />

            <TextField id="outlined-basic"
                type="password"
                label="Password"
                variant="outlined"
                value={formik.values.password}
                onChange={formik.handleChange}
                name="password"
                onBlur={formik.handleBlur}
                error={formik.touched.password && formik.errors.password}
                helperText={formik.touched.password && formik.errors.password ? formik.errors.password : null}
            />
            <Button variant="contained" type='submit'
            >Submit</Button>
            <h4>Don't have an account<Link to="/register">Register</Link></h4>
        </form>
    )
}
