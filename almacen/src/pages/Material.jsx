import styled from "styled-components"

const Container = styled.div``

const Material = ({item}) => {
    return (
        <Container>
            <Circle/>
            <Image src={item.img}/>
            <Info>
                <Icon>
                    
                </Icon>
            </Info>
        </Container>
    )
}

export default Material