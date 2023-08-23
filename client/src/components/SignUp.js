import React from "react";

function SignUp() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    return (
        <div>
            <h2>Sign Up</h2>
              <form>
                <label for='username'>Username: </label>
                <input type='text' id='username' name='username' onChange={(e) => setUsername(e.target.value)}/>
                <label for='password'>Password: </label>
                <input type='password' id='password' name='password' onChange={(e) => setPassword(e.target.value)}/>
                <label for='email'>Email: </label>
                <input type='email' id='email' name='email' onChange={(e) => setEmail(e.target.value)}/>
                <input type='submit' value='Submit' />
              </form>
        </div>
    );
}

export default SignUp;