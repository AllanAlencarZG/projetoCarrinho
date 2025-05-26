import styles from './gerenciarProdutos.module.css';
import { produtos } from "./produtos.js";

import { FaRegTrashAlt, FaRegEdit  } from "react-icons/fa";

export default function GerenciarProdutos() {
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
                                <div className={styles.btns}>
                                    <div className={styles.btn}><FaRegEdit></FaRegEdit></div>
                                    <div className={styles.btn}><FaRegTrashAlt></FaRegTrashAlt></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}