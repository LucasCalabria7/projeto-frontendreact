import { MainBuy, CardBuy, BuyName, BuyPrice, RemoveButton} from './buystyle'


export function Buy (props) {

    const removeCard = (id) => {
        if(window.confirm("Deseja remover este item de suas compras ?")){
            let removeItem = props.compra.filter((produto) => {
                if(produto.id !== id) {
                    return produto
                }
            })
            props.setCompra(removeItem)
            let finalBuy = props.counterCompra - props.produto.preco
            props.setCounterCompra(finalBuy)

            if(finalBuy === 0) {
                localStorage.clear();
            }
        }
    }

    return (
    <>
        <MainBuy>
        <CardBuy>
            <BuyName>1x {props.produto.nome}</BuyName>
            <BuyPrice>${props.produto.preco}</BuyPrice>
            <RemoveButton onClick={()=>removeCard(props.produto.id)} >X</RemoveButton>
        </CardBuy>
        </MainBuy>
    </>
    )
}