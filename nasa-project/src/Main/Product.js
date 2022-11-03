import React from 'react'
import {Card, Button, ProductName, ProductPrice} from './cardstyle'

function Product (props) {
    return (
    <>
        <Card>
            <img src={props.produto.imagemUrl} alt="Item" />
            <ProductName>{props.produto.nome} </ProductName>
            <ProductPrice>$ {props.produto.preco}k</ProductPrice>
            <Button>purchase</Button>
        </Card>
    </>
    )
}

export default Product