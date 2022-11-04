import React from 'react'
import {Card, Button, ProductName, ProductPrice} from './cardstyle'

function Product (props) {
    const adicionaTarefa = () => {
        const tarefaNova = [...props.listaCompra, props.novaCompra ]
        props.setListaCompra(tarefaNova)
        props.setNovaCompra("")
    }
    return (
    <>
        <Card>
            <img src={props.produto.imagemUrl} alt="Item" />
            <ProductName>{props.produto.nome} </ProductName>
            <ProductPrice>$ {props.produto.preco}k</ProductPrice>
            <Button onClick={adicionaTarefa} >buy now!</Button>
        </Card>
    </>
    )
}

export default Product