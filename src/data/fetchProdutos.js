import axios from "axios";

export async function criarProduto(nome, valor, imagem) {
  try {
    const response = await axios.post(
      "http://localhost:3000/produtos/criar",
      { nome, valor, imagem },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log("Sucesso em criar produto");
    return response.data;
  } catch (error) {
    console.error("Erro ao criar produto:", error);
  }
}

export async function lerProdutos(setProdutos) {
    try {
        const response = await axios.get("http://localhost:3000/produtos/ler", {
        headers: { "Content-Type": "application/json" },
        });
        console.log("Sucesso em ler produtos");

        setProdutos(response.data);
    } catch (error) {
        console.error("Erro ao ler produtos:", error);
    }
}

export async function deletarProduto(id) {
    try {
        const response = await axios.delete(
            `http://localhost:3000/produtos/deletar`,
            {
                data: { id: id },
                headers: { "Content-Type": "application/json" },
            }
        );
        console.log("Sucesso em deletar produto");
        return response.data;
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
    }
}

export async function AtualizarProduto(id, nome, valor, imagem) {
    try {
        const response = await axios.post(
        `http://localhost:3000/produtos/atualizar/`,
        { id, nome, valor, imagem },
        {
            headers: { "Content-Type": "application/json" },
        }
        );
        console.log("Sucesso em editar produto");
        return response.data;
    } catch (error) {
        console.error("Erro ao editar produto:", error);
    }
}