import { MainBuy, CardBuy, BuyName, BuyPrice, RemoveButton} from './buystyle'


export function Buy (props) {
    console.log(props)
    return (
    <>
        <MainBuy>
        <CardBuy>
            <BuyName>1x {props.produto.nome}</BuyName>
            <BuyPrice>{props.produto.preco}K</BuyPrice>
            <RemoveButton>X</RemoveButton>
        </CardBuy>
        </MainBuy>
    </>
    )
}