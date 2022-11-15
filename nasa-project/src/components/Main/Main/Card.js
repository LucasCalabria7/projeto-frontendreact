import React from 'react'

import {CardGlobalStyle, Button, ProductName, ProductPrice} from './cardstyle'

export function Card (props) {

    let nameCardBuy = props.produto.nome
    let priceCardBuy = props.produto.preco

    return (
    <>
        <CardGlobalStyle>
            <img src={props.produto.imagemUrl} alt="Item" />
            <ProductName>{nameCardBuy} </ProductName>
            <ProductPrice>$ {priceCardBuy}k</ProductPrice>
            <Button onClick={()=>props.onClickBuy(nameCardBuy, priceCardBuy)} >buy now!</Button>
        </CardGlobalStyle>
    </>
    )
}