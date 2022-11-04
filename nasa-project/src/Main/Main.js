import React from 'react'
import {MainContainer, FilterArea, CardsContainer, ShopArea} from './mainstyles'
import {Filter} from './Filter/Filter.js'
import {Buy} from './Buy/Buy.js'
import Product from './Product'
import {useState} from 'react'


function Main () {
    const [buscaNome, setBuscaNome] = useState("")
    const [ordemNome, setOrdemNome] = useState("")
    const [ordemPreco, setOrdemPreco] = useState("")
    const [listaCompra, setListaCompra] = useState([])
    const [novaCompra, setNovaCompra] = useState("")

    let [produtos, setProdutos] = useState(
        [ 
        {
            id: 0,
            nome: "Tesla Bot",
            preco: 10,
            imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnu59XOydgOBVLOianNYBDEDe_AzIxNLBjw&usqp=CAU",
        },
        {
            id: 1,
            nome: "SpaceX Space Suit",
            preco: 50,
            imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOeFAfS1wBt6JTVs7rf1LHiTBv9QM_oTwe5A&usqp=CAU",
        },
        {
            id: 2,
            nome: "Occupy Mars Ticket",
            preco: 500,
            imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUNqLHyDSpnYy88OT_pbhfUpxt3oz9mX0BAw&usqp=CAU",
        },
        {
            id: 3,
            nome: "Starship Space Tour",
            preco: 200,
            imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM2ZhMNBVkjm01KEhNWLPJIGMe6Mc4cMDCAg&usqp=CAU",
        },
        {
            id: 4,
            nome: "NeuraLink Surgery",
            preco: 35,
            imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJUpCa72aGBcIQc4zwPu5Et7m_Zf-1sVBAkg&usqp=CAU",
        },
        {
            id: 5,
            nome: "StarLink Connection",
            preco: 15,
            imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCErP7bRE9IcnoIhahFTKPSoKjD0LqHE0ZyA&usqp=CAU",
        },
        {
            id: 6,
            nome: "Hubble Telescope",
            preco: 250,
            imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQesHahdb8P05Xp3gVPl2rP4V5mDn7NAKgRrw&usqp=CAU",
        },
        {
            id: 7,
            nome: "ChangeSite(Y) - Moon Mineral",
            preco: 45,
            imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY0vkAjvyeAfGQusQgJVyC7VvJzwtyb_FUuaaDvxOg8k4Lr-F2ozcF84Ty1AiNWdqGycc&usqp=CAU",
        }
    ])


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

            <CardsContainer
                            listaCompra={listaCompra}
                            setListaCompra={setListaCompra}
                            novaCompra={novaCompra}
                            setNovaCompra={setNovaCompra}
            >
                {produtos
                .filter((produto) =>{
                return produto.nome.toLowerCase().includes(buscaNome.toLowerCase())
                })
                .sort((a, b) => {
                    if(ordemNome === 'az') {
                        return a.nome < b.nome ? -1 : 1
                    } else if (ordemNome === 'za') {
                        return a.nome > b.nome ? -1 : 1
                    }
                })
                .sort((a, b) =>{
                    if(ordemPreco === 'high') {
                        return a.preco > b.preco ? -1 : 1
                    } else if (ordemPreco === 'low') {
                        return a.preco < b.preco ? -1 : 1
                    }
                })
                .map((produto)=>{
                    return <Product
                    key={produto.id}
                    produto={produto}
                    />
                })}
            </CardsContainer>

            <ShopArea>
                <Buy 
                listaCompra={listaCompra}
                setListaCompra={setListaCompra}
                novaCompra={novaCompra}
                setNovaCompra={setNovaCompra}
                />
            </ShopArea>
            
        </MainContainer>
    )
}

export default Main