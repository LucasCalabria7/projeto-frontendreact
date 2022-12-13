import {useState} from 'react'

import ccvisa from '../assets/cc-visa.svg'
import ccicon from '../assets/cc-icon.svg'
import logo from '../assets/logo.svg'
import ccchip from '../assets/cc-chip.svg'

import {GlobalSection, Logo, InputArea, Input, Label, CreditCardArea, TopIcons, InfoArea, Number, Name, DataUser, CreditCardFooter, FooterButton} from './PaymentPageStyled'


export function PaymentPage() {

    const [name, setName] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    const [date, setDate] = useState("")
    const [CVC, setCVC] = useState("")


    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleCardNumber = (e) => {
        setCardNumber(e.target.value)
    }

    const handleDate = (e) => {
        setDate(e.target.value)
    }

    const handleCVC = (e) => {
        setCVC(e.target.value)
    }

    const finalizeShopping = ()=> {
        alert(`Hello ${name}, you completed your shopping on Nasa E-Commerce, congratulations!`)
    }

    return (
        <>
        <GlobalSection>
            <InputArea>
            <Logo src={logo} alt="logo" />
                <Label>Card Number</Label>
                <Input value={cardNumber} onChange={handleCardNumber} />
                <Label>Name</Label>
                <Input  value={name} onChange={handleName} />
                <Label>Expiration date</Label>
                <Input value={date} onChange={handleDate} />
                <Label>CVC</Label>
                <Input value={CVC} onChange={handleCVC} />
            </InputArea> 

            <CreditCardArea>
                <TopIcons>
                    <img src={ccicon} alt='icon' />
                    <img src={ccvisa} alt='visa' />
                </TopIcons>
                <InfoArea>
                    <Number>{cardNumber === "" ? "1234 4567 7890 9870" : `${cardNumber}`}</Number>
                    <Name>name:</Name>
                    <DataUser>{name === "" ? "John Doe" : `${name}`}</DataUser>
                </InfoArea>

                <CreditCardFooter>
                <div>
                    <Name>expiration date:</Name>
                    <DataUser>{date === "" ? "02/32" : `${date}` }</DataUser>
                </div>
                <div>
                    <Name>CVC:</Name>
                    <DataUser>{CVC === "" ? "9999": `${CVC}`}</DataUser>
                </div>
                <img src={ccchip} alt='chip' />
                </CreditCardFooter>
            </CreditCardArea>

            <FooterButton onClick={finalizeShopping} >
                <p>finalize shopping!</p>
            </FooterButton>
        </GlobalSection>
            </>
    )
}