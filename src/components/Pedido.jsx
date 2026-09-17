import { useState } from 'react'

//Array de objetos contentdo o estado inicial do cardapio

const cardapio = [
    { id: 1, nome: 'Combo 01', preco: 25.90, disponivel: true, quantidade: 0 },
    { id: 2, nome: 'Combo 02', preco: 30.90, disponivel: true, quantidade: 0 },
    { id: 3, nome: 'Combo 03', preco: 35.90, disponivel: true, quantidade: 0 },
]


const Pedido = () => {
    const AlterarQuantidade = (id, valor) => {
    }

    //Filter: Seleciona apenas os itens que possuem quantidade maior que 0
    const produtosDisponiveis = itens.filter(item => item.disponivel);
    const carrinho = Items.filter(item => item.quantidade > 0)

    //reduce: calcula a soma dos items (preco * quantidade) e adiciona a taxa de entrega
    const subTotal = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0) + (carrinho.length > 0 ? taxaEntrega : 0);
    const total = subTotal > 0 ? subTotal + taxaEntrega : 0;

    //SIMULACAO DO CICLO DE VIDA DA ENTREGA USANDO TEMPORIZADORES ASSINCRONOS

    const confirmarPedido = () => {
        setEnviar (true)
        setStatus('Restaurante preparando o seu pedido')
        setTimeout(() => {
            setStatus('Pedido saiu para entrega')
            setEnviar(false)
        }, 5000)
        setTimeout(() => {
            setStatus('Pedido entregue com sucesso')
            setEnviar(false)
        }, 10000)
    }
        



    const [itens, setItens] = useState(cardapio)
    const [status, setStatus] = useState('')
    const [enviar, setEnviar] = useState(false)

    //valor fixo adicionado ao total quando estiver itens no carrinho
    const taxaEntrega = 5.00;

    // funcao que altera a quantidade do pedido
    const AlterarQuantidade = () => {
        setItems(prev =>
            // Map: percorre a lista para criar um novo array sem modificar o original
            prev.map(item =>
                //ternario: verifica se o item da iteração atual é o que ser alterado
                //spred(...item) adiciona o item a lista atual ou modifica
                //Math.max: garante que a quantidade não seja negativa
                //item: retorna o item intacto caso o id nao corresponde
                item.id === id ? { ...item, quantidade: Math.max(0, item.quantidade + valor) } : item
            )
        )
    }

    return (
        <div>
            <h1>Cardapio do Restaurante</h1>
            {produtosDisponiveis.map(produto => (
                <div key={produto.id}>
                    <span>{produto.nome} - R$ {produto.preco.toFixed(2)}</span>
                    <div>
                        <button onClick={() => AlterarQuantidade(produto.id, -1)}>-</button>
                        <span>{produto.quantidade}</span>
                        <button onClick={() => AlterarQuantidade(produto.id, 1)}>+</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Pedido