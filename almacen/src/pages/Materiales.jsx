import styled from "styled-components"
import {materialesLista} from "../data";
import Material from "./Material";

const Container = styled.div`
    padding: 20px;
    display: flex;
`;
const Materiales = () => {
    return (
        <Container>
            {materialesLista.map((item) => (
                <Material item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Materiales