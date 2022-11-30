import React from 'react'
import { useState, useEffect } from 'react'

import { Filter } from '../Filter/Filter'
import { Card } from './Card'
import { Buy } from '../Buy/Buy'

import BuyIcon from '../../../assets/buyicon.png'

import { MainContainer, FilterArea, CardsContainer, ShopArea, ImgBuy, BuyTitle, BuyHeader, BuyFooter, CardFooter, TextFooter } from './mainstyles'


function Main() {
    const [buscaNome, setBuscaNome] = useState("")
    const [ordemNome, setOrdemNome] = useState("")
    const [ordemPreco, setOrdemPreco] = useState("")
    const [compra, setCompra] = useState([])
    const [counterCompra, setCounterCompra] = useState(0)

    const [produtos, setProdutos] = useState(
        [
            {
                id: 0,
                nome: "Tesla Bot",
                preco: 100,
                imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnu59XOydgOBVLOianNYBDEDe_AzIxNLBjw&usqp=CAU",
            },
            {
                id: 1,
                nome: "SpaceX Space Suit",
                preco: 500,
                imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOeFAfS1wBt6JTVs7rf1LHiTBv9QM_oTwe5A&usqp=CA",
            },
            {
                id: 2,
                nome: "Occupy Mars Ticket",
                preco: 5000,
                imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUNqLHyDSpnYy88OT_pbhfUpxt3oz9mX0BAw&usqp=CAU",
            },
            {
                id: 3,
                nome: "Starship Space Tour",
                preco: 2000,
                imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM2ZhMNBVkjm01KEhNWLPJIGMe6Mc4cMDCAg&usqp=CAU",
            },
            {
                id: 4,
                nome: "NeuraLink Surgery",
                preco: 350,
                imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJUpCa72aGBcIQc4zwPu5Et7m_Zf-1sVBAkg&usqp=CAU",
            },
            {
                id: 5,
                nome: "StarLink Connection",
                preco: 150,
                imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCErP7bRE9IcnoIhahFTKPSoKjD0LqHE0ZyA&usqp=CAU",
            },
            {
                id: 6,
                nome: "Hubble Telescope",
                preco: 2000,
                imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQesHahdb8P05Xp3gVPl2rP4V5mDn7NAKgRrw&usqp=CAU",
            },
            {
                id: 7,
                nome: "ChangeSite(Y) - Moon Mineral",
                preco: 450,
                imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY0vkAjvyeAfGQusQgJVyC7VvJzwtyb_FUuaaDvxOg8k4Lr-F2ozcF84Ty1AiNWdqGycc&usqp=CAU",
            }
        ])

    const onClickBuy = (nameCardBuy, priceCardBuy) => {
        let copyCompra = [...compra]
        let newCompra = {
            id: Date.now(),
            nome: nameCardBuy,
            preco: priceCardBuy
        }
        copyCompra.push(newCompra)
        setCompra(copyCompra)

        let finalBuy = counterCompra + priceCardBuy
        setCounterCompra(finalBuy)
    }



    useEffect(() => {
        if (compra.length > 0) {
            const stringCarrinho = JSON.stringify(compra)
            localStorage.setItem("carrinho", stringCarrinho)
        }
    }, [compra])

    useEffect(() => {
        const novoCarrinho = JSON.parse(localStorage.getItem("carrinho"))
        if (novoCarrinho !== null) {
            setCompra(novoCarrinho)
        }
    }, [])



    useEffect(() => {
        if (counterCompra > 0) {
            const stringCompra = JSON.stringify(counterCompra)
            localStorage.setItem("valor", stringCompra)
        }
    }, [counterCompra])

    useEffect(() => {
        const novacompra = JSON.parse(localStorage.getItem("valor"))
        if (novacompra !== 0) {
            setCounterCompra(novacompra)
        }
    }, [])

    return (
        <MainContainer>
            <FilterArea>
                <Filter
                    buscaNome={buscaNome}
                    setBuscaNome={setBuscaNome}
                    ordemNome={ordemNome}
                    setOrdemNome={setOrdemNome}
                    ordemPreco={ordemPreco}
                    setOrdemPreco={setOrdemPreco}
                />
            </FilterArea>

            <CardsContainer>
                {produtos
                    .filter((produto) => {
                        return produto.nome.toLowerCase().includes(buscaNome.toLowerCase())
                    })
                    .sort((a, b) => {
                        if (ordemNome === 'az') {
                            return a.nome < b.nome ? -1 : 1
                        } else if (ordemNome === 'za') {
                            return a.nome > b.nome ? -1 : 1
                        }
                    })
                    .sort((a, b) => {
                        if (ordemPreco === 'high') {
                            return a.preco > b.preco ? -1 : 1
                        } else if (ordemPreco === 'low') {
                            return a.preco < b.preco ? -1 : 1
                        }
                    })
                    .map((produto) => {
                        return <Card
                            key={produto.id}
                            produto={produto}
                            onClickBuy={onClickBuy}
                        />
                    })}
            </CardsContainer>

            <ShopArea>
                <BuyHeader>
                    <ImgBuy src={BuyIcon} alt="buy-cart" />
                    <BuyTitle>Buying</BuyTitle>
                </BuyHeader>

                {compra.map((produto, index) => {
                    return <Buy
                        key={index}
                        produto={produto}
                        compra={compra}
                        setCompra={setCompra}
                        counterCompra={counterCompra}
                        setCounterCompra={setCounterCompra}
                    />
                })}

                <BuyFooter>
                    <CardFooter>
                        <TextFooter>{compra.length} Products</TextFooter>
                        <TextFooter>Total: {counterCompra}</TextFooter>
                    </CardFooter>
                </BuyFooter>
            </ShopArea>

        </MainContainer>
    )
}

export default Main