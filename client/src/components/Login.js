import React from "react";

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div id='logIn'>
            <h2>Login</h2>
            <form>
                <label for='username'>Username: </label>
                <input type='text' id='username' name='username' onChange={(e) => setUsername(e.target.value)}/>
                <label for='password'>Password: </label>
                <input type='password' id='password' name='password' onChange={(e) => setPassword(e.target.value)}/>
                <input type='submit' value='Submit' />
            </form>
        </div>
    );
}

export default Login;