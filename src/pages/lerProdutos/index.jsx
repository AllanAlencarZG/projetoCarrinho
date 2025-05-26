import styles from './produtos.module.css';
import { produtos } from "./produtos.js";

export default function LerProdutos() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.produtos}>
                    {
                        produtos.map((item, index) => (
                            <div className={styles.produto} key={index}>
                                <div className={styles.imagem}>
                                    <img src={item.imagem} alt={item.nome} />
                                </div>
                                <div className={styles.nome}>{item.nome}</div>
                                <div className={styles.valor}>
                                    R$ {item.valor.toFixed(2)}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}