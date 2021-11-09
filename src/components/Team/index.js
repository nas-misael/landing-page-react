import React from 'react'
import { TeamContainer, TeamHeading, TeamWrapper, TeamCard, TeamImg, TeamInfo, TeamTitle, TeamDesc, TeamButton } from './TeamElements'

const Team = ({heading, dados}) => {
    return (
        <TeamContainer id="squad">
            <TeamHeading>{heading}</TeamHeading>
            <TeamWrapper>
                {dados.map((product, index) => {
                    return (
                        <TeamCard key={index}>
                            <TeamImg src={product.img} alt={product.alt} />
                            <TeamInfo>
                                <TeamTitle>{product.nome}</TeamTitle>
                                <TeamDesc>{product.desc}</TeamDesc>
                                <TeamButton href={`${product.addres}`}>{product.button}</TeamButton>
                            </TeamInfo>
                        </TeamCard>
                    )
                })}
            </TeamWrapper>
        </TeamContainer>
    )
}

export default Team