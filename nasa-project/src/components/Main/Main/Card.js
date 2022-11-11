import React from 'react'

import {CardGlobalStyle, Button, ProductName, ProductPrice} from './cardstyle'

export function Card (props) {
    return (
    <>
        <CardGlobalStyle>
            <img src={props.produto.imagemUrl} alt="Item" />
            <ProductName>{props.produto.nome} </ProductName>
            <ProductPrice>$ {props.produto.preco}k</ProductPrice>
            <Button onClick={props.onClickBuy} >buy now!</Button>
        </CardGlobalStyle>
    </>
    )
}