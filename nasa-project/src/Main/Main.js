import React from 'react'
import {MainContainer, FilterArea, ProductsArea, ShopArea} from './mainstyles'
import Product from './Product'
import Filter from './iconfilter.png'
import Buy from './buyicon.png'
import {ImgFilter, FilterTitle, FilterHeader} from './filterstyle'
import {ImgBuy, BuyTitle, BuyHeader} from './buystyle'


function Main () {
    return (
        <MainContainer>
            <FilterArea>
                <FilterHeader>
                    <ImgFilter src={Filter} alt="filter-icon" />
                    <FilterTitle>Filter</FilterTitle>
                </FilterHeader>
            </FilterArea>

            <ProductsArea>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
            </ProductsArea>

            <ShopArea>
            <BuyHeader>
                <ImgBuy src={Buy} alt="buy-cart" />
                <BuyTitle>Buying</BuyTitle>
            </BuyHeader>
            </ShopArea>
            
        </MainContainer>
    )
}

export default Main