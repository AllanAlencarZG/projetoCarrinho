import { useNavigate } from 'react-router';
import styles from './login.module.css';

export default function Login() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Login</h1>
                <div className={styles.inputs}>
                    <input type="email" placeholder='E-mail' />
                    <input type="password" placeholder='Password' />
                </div>
                <div id={styles["register-redirect"]} onClick={() => navigate("/criarlogin")}>Não tem uma Conta?</div>
                <button>Logar</button>
            </div>
        </div>
    )
}