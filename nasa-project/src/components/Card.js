import React from 'react'

import {CardGlobalStyle, Button, ProductName, ProductPrice} from './cardstyle'

export function Card (props) {

    let nameCardBuy = props.product.name
    let priceCardBuy = props.product.price

    return (
    <>
        <CardGlobalStyle>
            <img src={props.product.imageUrl} alt="Item" />
            <ProductName>{nameCardBuy} </ProductName>
            <ProductPrice>$ {priceCardBuy}</ProductPrice>
            <Button onClick={()=>props.onClickBuy(nameCardBuy, priceCardBuy)} >buy now!</Button>
        </CardGlobalStyle>
    </>
    )
}