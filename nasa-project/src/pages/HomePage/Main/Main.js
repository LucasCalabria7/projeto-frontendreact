import React from 'react'
import { useState, useEffect } from 'react'

import { Filter } from '../Filter/Filter'
import { Card } from '../../../components/Card'
import { Buy } from '../Buy/Buy'

import products from '../../../products.json'

import BuyIcon from '../../../assets/buyicon.png'

import { MainContainer, FilterArea, CardsContainer, ShopArea, ImgBuy, BuyTitle, BuyHeader, BuyFooter, CardFooter, TextFooter, CardPayment } from './mainstyles'

import { useNavigate } from "react-router-dom"
import { goToPaymentPage } from "../../../routes/coordinator"

export function HomePage() {

    const [searchName, setSearchName] = useState("")
    const [sortName, setSortName] = useState("")
    const [sortPrice, setSortPrice] = useState("")
    const [buy, setBuy] = useState([])
    const [counterPrice, setCounterPrice] = useState(0)
    const [switchPayment, setSwitchPayment] = useState(false)

    let navigate = useNavigate()

    const onClickBuy = (nameCardBuy, priceCardBuy) => {
        let copyBuy = [...buy]
        let newBuy = {
            id: Date.now(),
            name: nameCardBuy,
            price: priceCardBuy
        }
        copyBuy.push(newBuy)
        setBuy(copyBuy)

        let finalBuy = counterPrice + priceCardBuy
        setCounterPrice(finalBuy)

        setSwitchPayment(true)
    }


//using effects to save cart, value and switch on Local Storage
    useEffect(() => {
        if (buy.length > 0) {
            const stringCart = JSON.stringify(buy)
            localStorage.setItem("cart", stringCart)
        }
    }, [buy])

    useEffect(() => {
        const newCart = JSON.parse(localStorage.getItem("cart"))
        if (newCart !== null) {
            setBuy(newCart)
        }
    }, [])



    useEffect(() => {
        if (counterPrice > 0) {
            const buyPrice = JSON.stringify(counterPrice)
            localStorage.setItem("value", buyPrice)
        }
    }, [counterPrice])

    useEffect(() => {
        const getBuy = JSON.parse(localStorage.getItem("value"))
        if (getBuy !== 0) {
            setCounterPrice(getBuy)
        }
    }, [])



    useEffect(() => {
        if (switchPayment === true) {
            const booleanSwitch = JSON.stringify(switchPayment)
            localStorage.setItem("switch", booleanSwitch)
        }
    }, [switchPayment])

    useEffect(() => {
        const newBoolean = JSON.parse(localStorage.getItem("switch"))
        if (switchPayment !== true) {
            setSwitchPayment(newBoolean)
        }
    }, [])



    return (
        <MainContainer>
            <FilterArea>
                <Filter
                    searchName={searchName}
                    setSearchName={setSearchName}
                    sortName={sortName}
                    setSortName={setSortName}
                    sortPrice={sortPrice}
                    setSortPrice={setSortPrice}
                />
            </FilterArea>

            <CardsContainer>
                {products
                    .filter((product) => {
                        return product.name.toLowerCase().includes(searchName.toLowerCase())
                    })
                    .sort((a, b) => {
                        if (sortName === 'az') {
                            return a.name < b.name ? -1 : 1
                        } else if (sortName === 'za') {
                            return a.name > b.name ? -1 : 1
                        }
                    })
                    .sort((a, b) => {
                        if (sortPrice === 'high') {
                            return a.price > b.price ? -1 : 1
                        } else if (sortPrice === 'low') {
                            return a.price < b.price ? -1 : 1
                        }
                    })
                    .map((product) => {
                        return <Card
                            key={product.id}
                            product={product}
                            onClickBuy={onClickBuy}
                        />
                    })}
            </CardsContainer>

            <ShopArea>
                <BuyHeader>
                    <ImgBuy src={BuyIcon} alt="buy-cart" />
                    <BuyTitle>Buying</BuyTitle>
                </BuyHeader>

                {buy.map((product, index) => {
                    return <Buy
                        key={index}
                        product={product}
                        buy={buy}
                        setBuy={setBuy}
                        counterPrice={counterPrice}
                        setCounterPrice={setCounterPrice}
                        setSwitchPayment={setSwitchPayment}
                    />
                })}

                <BuyFooter >
                    <CardFooter switchPayment={switchPayment} >
                        <TextFooter>{buy.length} Products</TextFooter>
                        <TextFooter>Total: {counterPrice}</TextFooter>
                    </CardFooter>
                    <CardPayment onClick={()=> goToPaymentPage(navigate)} switchPayment={switchPayment} >
                        <p>payment!</p>
                    </CardPayment>
                </BuyFooter>
            </ShopArea>

        </MainContainer>
    )
}