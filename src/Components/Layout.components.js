import styled from 'styled-components';

const Layout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    `;

const Header = styled.header`
    width: 100%;
    text-align: center;
    background-color: lightblue;
    font-size: 30px;
    font-weight: bold;
    color: white;
    padding: 16px 0;
    `;

const CardLayout = styled.div`
    columns: 100px 3;
    display: flex;
    flex-direction: column;
    margin: 16px;
    `;


export { Header, Layout, CardLayout };
