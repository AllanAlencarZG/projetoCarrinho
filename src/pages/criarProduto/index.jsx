import { useState } from 'react';
import styles from './criarProduto.module.css';

export default function CriarProduto() {
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [imagem, setImagem] = useState('');

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Criar Produto</h1>
                <div className={styles.inputs}>
                    <input type="text" placeholder='Nome' value={nome} onChange={e => setNome(e.target.value)} />
                    <input type="number" placeholder='Valor' value={valor} onChange={e => setValor(e.target.value)} />
                    <input type="url" placeholder='Imagem' value={imagem} onChange={e => setImagem(e.target.value)} />
                </div>
                <button>Criar produto</button>
            </div>
        </div>
    );
}