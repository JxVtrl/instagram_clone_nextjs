import styled from 'styled-components';
import { Header, Nav as Footer } from '../components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;

    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const AppLayout = ({ children }) => (
    <Container>
        <Header />
        {children}
        <Footer />
    </Container>
)
