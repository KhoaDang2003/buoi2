import React, {useState} from "react";

function Login(){
    const [username, setUsename] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setisAdmin] = useState('false');

    const handleLogin = () =>{
        console.log('Username:',username);
        console.log('Password:',password);
        console.log('isAdmin:',isAdmin);
    };

    return(
        <div>
            <label>
                Enter your username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsename(e.target.value)}
                />
            </label>
            <br/>
            <label>
                Enter your Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br/>
            <label>
                <input
                    type="checkbox"
                    value="isAdmin"
                    onChange={(e) => setisAdmin(e.target.checked)}
                />
                IsAdmin?
            </label>
            <br/>
            <input
                type="button"
                value="Đăng nhập"
                onClick={handleLogin}
            />
        </div>
    );
}

export default Login;