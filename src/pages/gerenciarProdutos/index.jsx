import styles from './gerenciarProdutos.module.css';
// import { produtos } from "./produtos.js";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import { useContext, useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import { AtualizarProduto, deletarProduto } from '../../data/fetchProdutos.js';
import { DataContext } from '../../contexts/Data.jsx';

export default function GerenciarProdutos() {
    const [open, setOpen] = useState(false);
    const [produtoEdit, setProdutoEdit] = useState(null);

    const {produtos} = useContext(DataContext);

    const handleOpen = (produto) => {
        setProdutoEdit(produto);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setProdutoEdit(null);
    };

    const handleChange = (e) => {
        setProdutoEdit({ ...produtoEdit, [e.target.name]: e.target.value });
    };

    const handleAtualizar = () => {

        AtualizarProduto(produtoEdit.id, produtoEdit.nome, parseFloat(produtoEdit.valor), produtoEdit.imagem);
        window.location.reload();
        
        handleClose();
    };

    async function handledeletar(id) {
        console.log(id);
        await deletarProduto(id);
        window.location.reload();
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.produtos}>
                    {produtos.map((item, index) => (
                        <div className={styles.produto} key={index}>
                            <div className={styles.imagem}>
                                <img src={item.imagem} alt={item.nome} />
                            </div>
                            <div className={styles.nome}>{item.nome}</div>
                            <div className={styles.valor}>
                                R$ {item.valor.toFixed(2)}
                            </div>
                            <div className={styles.btns}>
                                <div className={styles.btn} onClick={() => handleOpen(item)}>
                                    <FaRegEdit />
                                </div>
                                <div className={styles.btn} onClick={() => handledeletar(item.id)}>
                                    <FaRegTrashAlt />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: '#222',
                        color: '#fff',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        minWidth: 320,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    <h2 style={{ color: '#fff', margin: 0 }}>Editar Produto</h2>
                    <TextField
                        label="Nome"
                        name="nome"
                        value={produtoEdit?.nome || ''}
                        onChange={handleChange}
                        fullWidth
                        InputLabelProps={{ style: { color: "#fff" } }}
                        InputProps={{ style: { color: "#fff" } }}
                        sx={{ input: { color: "#fff" } }}
                    />
                    <TextField
                        label="Valor"
                        name="valor"
                        type="number"
                        value={produtoEdit?.valor || ''}
                        onChange={handleChange}
                        fullWidth
                        InputLabelProps={{ style: { color: "#fff" } }}
                        InputProps={{ style: { color: "#fff" } }}
                        sx={{ input: { color: "#fff" } }}
                    />
                    <TextField
                        label="URL da Imagem"
                        name="imagem"
                        value={produtoEdit?.imagem || ''}
                        onChange={handleChange}
                        fullWidth
                        InputLabelProps={{ style: { color: "#fff" } }}
                        InputProps={{ style: { color: "#fff" } }}
                        sx={{ input: { color: "#fff" } }}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                        <Button variant="contained" color="primary" onClick={handleAtualizar}>
                            Salvar
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}