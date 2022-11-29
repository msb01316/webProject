import { useEffect } from "react";
import "./css/LoginPage.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();

    function handleSubmit (e) {
        e.preventDefault();

        const form = e.target;
        const user = {
            username: form[0].value,
            password: form[1].value
        };

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("token", data.token);
        });
    }

    // useEffect(() => {
    //     fetch("/isUserAuth", {
    //         headers: {
    //             "x-access-token": localStorage.getItem("token")
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => data.isLoggedIn ? navigate.push("/dashboard"): null)
    // }, []);

    return (
        <div className="login-page-wrapper">
            <div className="login-box">
                <h1 className="login-title">Login</h1>

                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label><br />
                        <input required type="text" id="username" name="username" /><br />
                        <label htmlFor="password">Password:</label><br />
                        <input required type="password" id="password" name="password"  /><br /><br />
                        <input type="submit" value="Log In" />
                    </form>
                    <Link to="/signup"><button type="button">Signup</button></Link>
                    <Link to="/"><button type="button">Continue As Guest</button></Link>
                </div>
            </div>
        </div>
    );

}

export default LoginPage;
