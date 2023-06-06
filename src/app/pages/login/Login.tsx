import { useState } from "react";

export const Login = () => {

    const [email, setEmail] = useState('teste');
    const [pass, setPass] = useState('');

    const handleEntrar = () => {
        console.log(email)
        console.log(pass)
    }

    return(
        <div>
            <h3>Login</h3>
            <form action="">
                <label>
                    <span>Email </span>
                    <input value={email} onChange={e => setEmail(e.target.value)}/>
                </label>
                <br />
                <br />
                <label>
                    <span>Senha </span>
                    <input type="password" value={pass} onChange={e => setPass(e.target.value)}/>
                </label>
                <br />
                <br />
                <button type="button" onClick={handleEntrar}>Entrar</button>
            </form>
        </div>
    );
}











/* //Maneira de navegar entre páginas sem ter que carregar. Essa é através de função.
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const history = useNavigate();

    const handleClick = () => {
        history('/dashboard');
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleClick}>Login</button>
        </div>
    );
}

 */