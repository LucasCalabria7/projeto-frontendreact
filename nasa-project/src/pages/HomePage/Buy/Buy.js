import { MainBuy, CardBuy, BuyName, BuyPrice, RemoveButton} from './buystyle'


export function Buy (props) {

    const removeCard = (id) => {
        if(window.confirm("Are you sure you want to remove this item ?")){
            let removeItem = props.buy.filter((product) => {
                if(product.id !== id) {
                    return product
                }
            })
            props.setBuy(removeItem)


            let finalBuy = props.counterPrice - props.product.price
            props.setCounterPrice(finalBuy)
            if(finalBuy === 0) {
                localStorage.clear();
                props.setSwitchPayment(false)
            }
        }
    }

    return (
    <>
        <MainBuy>
        <CardBuy>
            <BuyName>1x {props.product.name}</BuyName>
            <BuyPrice>${props.product.price}</BuyPrice>
            <RemoveButton onClick={()=>removeCard(props.product.id)} >X</RemoveButton>
        </CardBuy>
        </MainBuy>
    </>
    )
}