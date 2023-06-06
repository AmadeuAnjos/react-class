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

//Maneira de navegar entre páginas sem ter que carregar. Essa é através de função.
