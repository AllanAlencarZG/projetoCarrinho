import React from "react";
import styles from './carrinho.module.css';
import { IoMdClose } from "react-icons/io";
import plus from "../../../assets/plus.svg";
import minus from "../../../assets/minus.svg";
import cupom from "../../../assets/cupom.svg";

export default function Carrinho({productsInCart, showCart, setShowCart}) {
    if (!showCart) {
        return null;
    }

    function valorTotal() {
        return productsInCart.reduce((total, item) => total + item.valor, 0);
    }

    function produtosUnicos() {
        return productsInCart.filter(
            (item, index, self) =>
                index === self.findIndex((t) => t.id === item.id)
        );
    }

    function quantidadeProdutos(product) {
        return productsInCart.filter((item) => item.id === product.id).length;
    }

    return (
        <div className={styles["cart-container"]}>
            <div className={styles["right-content"]}>
                <div className={styles.top}>
                    <div>
                        Seu Carrinho tem <span>{produtosUnicos().length} itens</span>
                    </div>
                    <IoMdClose onClick={() => setShowCart(0)} />
                </div>
                <div className={styles["products-container"]}>
                    {produtosUnicos().map((item, key) => (
                        <div className={styles.product} key={key}>
                            <div className={styles["product-img"]}>
                                <img src={item.imagem} alt="" />
                            </div>
                            <div className={styles["product-info"]}>
                                <div className={styles["product-name"]}>
                                    {item.nome}
                                </div>
                                <div className={styles["buy-info"]}>
                                    <div className={styles.price}>R$ {item.valor}</div>
                                    <div className={styles["amt-changer"]}>
                                        <button
                                            type="button"
                                            className={styles["amt-btn"]}
                                            id={styles["subtract-btn"]}
                                        >
                                            <img src={minus} alt="" />
                                        </button>
                                        <div className={styles["product-amount"]}>
                                            {quantidadeProdutos(item)}
                                        </div>
                                        <button type="button" className={styles["amt-btn"]} id={styles["add-btn"]}>
                                            <img src={plus} alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.bottom}>
                    <div className={styles["bottom-top"]}>
                        <div className={styles.total}> Total:<span>R$ {valorTotal().toFixed(2)}</span></div>
                        <div className={styles["add-cupom-container"]}>
                            <img src={cupom} alt="" />
                            <label htmlFor="">Adicionar Cupom</label>
                        </div>
                    </div>
                    <button type="button">Finalizar compra</button>
                </div>
            </div>
        </div>
    );
}