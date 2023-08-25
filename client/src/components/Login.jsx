import React, {useState} from "react";

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div id='logIn'>
            <h2>Login</h2>
            <form>
                <div className="formInputGroup">
                <label htmlFor='username'>Username: </label>
                <input type='text' id='username' name='username' onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className='formInputGroup'>
                <label htmlFor='password'>Password: </label>
                <input type='password' id='password' name='password' onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <input type='submit' value='Submit' className='submitBtn'/>
            </form>
        </div>
    );
}

export default Login;