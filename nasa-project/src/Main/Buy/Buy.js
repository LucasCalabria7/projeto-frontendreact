import {ImgBuy, BuyTitle, BuyHeader} from './buystyle'
import BuyIcon from './buyicon.png'

export function Buy () {
    return (
    <BuyHeader>
        <ImgBuy src={BuyIcon} alt="buy-cart" />
        <BuyTitle>Buying</BuyTitle>
    </BuyHeader>
    )
}