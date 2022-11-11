import {ImgBuy, BuyTitle, BuyHeader, MainBuy, CardBuy, BuyName, BuyPrice, RemoveButton} from './buystyle'

import BuyIcon from '../../../assets/buyicon.png'

export function Buy (props) {
    console.log(props)
    return (
    <>
        <BuyHeader>
            <ImgBuy src={BuyIcon} alt="buy-cart" />
            <BuyTitle>Buying</BuyTitle>
        </BuyHeader>

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