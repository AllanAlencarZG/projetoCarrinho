import { DataContext } from '../../contexts/Data.jsx';
import styles from './produtos.module.css';
// import { produtos } from "./produtos.js";
import { useContext } from 'react';

export default function LerProdutos() {
    const {produtos} = useContext(DataContext);
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