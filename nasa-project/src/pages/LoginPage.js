import {useState} from 'react'

import logo from '../assets/NASA-logo.png'

import { GlobalSection, NasaLogo, TitleAccount, InputArea, Input, Label, ButtonAccount } from './LoginPageStyled'

export function LoginPage() {

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatedPassword, setRepeatedPassword] = useState("")

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleRepeatedPassword = (e) => {
        setRepeatedPassword(e.target.value)
    }

    const checkInformation = () => {
        if(email.includes("@")) {
            alert(`We have sent you a email on ${email}, please check to confirm account!`)
        } else {
            return alert("Your Email must have a @")
        }

        if(username.length < 5 ) {
            alert("Your username must have at least 5 letters")
        } else if (password !== repeatedPassword) {
            alert("Your password does not match!")
        } else {
            alert(`Congratulations ${name}, you have just created your account on Nasa E-Commerce!`)
        }

        setName("")
        setUsername("")
        setEmail("")
        setPassword("")
        setRepeatedPassword("")
    }

    return (
        <>
            <GlobalSection>
                <NasaLogo src={logo} alt='logo' />
                <TitleAccount>Create your account and be part of our crew!</TitleAccount>
                <InputArea>
                    <Label>full name:</Label>
                    <Input value={name} onChange={handleName} recquired />
                    <Label>username:</Label>
                    <Input value={username} onChange={handleUsername} recquired />
                    <Label>email:</Label>
                    <Input value={email} onChange={handleEmail} recquired />
                    <Label>password:</Label>
                    <Input value={password} onChange={handlePassword} recquired />
                    <Label>repeat your password:</Label>
                    <Input value={repeatedPassword} onChange={handleRepeatedPassword} recquired />
                </InputArea>

                <ButtonAccount onClick={checkInformation} >
                    <p>Create Account!</p>
                </ButtonAccount>
            </GlobalSection>
        </>
    )
}