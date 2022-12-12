import ccbg from '../assets/cc-bg.svg'
import ccbgvisa from '../assets/cc-bg-visa.svg'
import ccvisa from '../assets/cc-visa.svg'
import ccicon from '../assets/cc-icon.svg'
import logo from '../assets/logo.svg'
import ccchip from '../assets/cc-chip.svg'
import ccdefault from '../assets/cc-default.svg'
import ccmastercard from '../assets/cc-mastercard.svg'
import background from '../assets/background.svg'

import styled from 'styled-components'

const GlobalSection = styled.section `
display: flex;
align-items: start;
background-color: #202024;
flex-direction: column;
margin: auto;
width: 60vw;
height:64vh;
border-radius: 1rem;
`

const Logo = styled.img `
    margin: 2rem;
`

const InputArea = styled.section `
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    color: rgba(255, 255, 255, 0.87);
    gap: 0.5rem;
`

const Input = styled.input `
    width: 20vw;
    background: #121214;
    border: 1px solid #323238;
    border-radius: 6px;
    height: 2rem;
    padding-inline: 1.2rem;

    color: white;
    text-transform: uppercase;
`

const Label = styled.label `
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: 0.01px;
    text-transform: uppercase;
    color: #e1e1e6;
`

export function PaymentPage() {

    return (
        <GlobalSection>
            <Logo src={logo} alt="logo" />
            <InputArea>
                <Label>Card Number</Label>
                <Input />
                <Label>Name</Label>
                <Input />

                <Label>Expiration date</Label>
                <Input />
                <Label>CVC</Label>
                <Input />
            </InputArea>
        </GlobalSection>
    )
}