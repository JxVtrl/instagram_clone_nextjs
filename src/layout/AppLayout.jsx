import styled from 'styled-components';
import Header from '../components/Header';
import { Nav as Footer } from '../components/Nav';

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
