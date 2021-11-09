import React from 'react'
import { ProductsContainer, ProductsHeading, ProductWrapper, ProductInfo, ProductCard, ProductImg, ProductTitle, ProductDesc, ProductPrice, ProductButton } from './ProductsElements'

const Products = ({heading, dados}) => {
    return (
        <ProductsContainer id="pizzas">
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {dados.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.nome}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.preco}</ProductPrice>
                                <ProductButton href="#form">{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Products
