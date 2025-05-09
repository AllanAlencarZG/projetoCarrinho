import { useNavigate } from 'react-router';
import styles from './criarlogin.module.css';

export default function CriarLogin() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Criar Login</h1>
                <div className={styles.inputs}>
                    <input type="email" placeholder="E-mail" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirmar Password" />
                </div>
                <div id={styles["login-redirect"]} onClick={() => navigate("/login")}>Já tem uma Conta?</div>
                <button>Registrar</button>
            </div>
        </div>
    );
}