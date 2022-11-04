import {ImgBuy, BuyTitle, BuyHeader, MainBuy, CardBuy, BuyName, BuyPrice, RemoveButton} from './buystyle'
import BuyIcon from './buyicon.png'

export function Buy (props) {
    const adicionaTarefa = () => {
        const tarefaNova = [...props.listaCompra, props.novaCompra ]
        props.setListaCompra(tarefaNova)
        props.setNovaCompra("")
    }

    return (
    <>
        <BuyHeader>
            <ImgBuy src={BuyIcon} alt="buy-cart" />
            <BuyTitle>Buying</BuyTitle>
        </BuyHeader>

        <MainBuy>
        <CardBuy>
            <BuyName>1x Hubble Telescope </BuyName>
            <BuyPrice>$ 100k</BuyPrice>
            <RemoveButton>X</RemoveButton>
        </CardBuy>
        </MainBuy>
    </>
    ) 
}