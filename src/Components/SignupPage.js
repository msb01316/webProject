import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./css/SignupPage.css";
import { useEffect } from 'react';

function SignupPage() {
    const navigate = useNavigate();

    async function handleSubmit (e) {
        e.preventDefault();

        const form = e.target;
        const user = {
            username: form[0].value,
            password: form[1].value
        }

        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
    }

    // useEffect(() => {
    //     fetch("/isUserAuth", {
    //         headers: {
    //             "x-access-token": localStorage.getItem("token")
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => data.isLoggedIn ? navigate.push("/dashboard"): null)
    // }, [])

    

    return (
        <>
            <div className="signup-page-wrapper">
                <div className="signup-box">
                    <h1 className="signup-title">Sign Up</h1>

                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="username">Username:</label><br/>
                            <input required type="text" id="username" name="username"  /><br />
                            <label htmlFor="password">Password:</label><br/>
                            <input required type="password" id="password" name="password"  /><br /><br />
                            <input type="submit" id="submit-button" value="Sign Up" />
                        </form>
                        <Link to="/login"><button type="button">Login</button></Link>
                    </div>
                </div>
            </div>
        </>
    );

}

export default SignupPage;