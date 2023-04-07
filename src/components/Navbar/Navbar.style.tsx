import styled from "styled-components";
import { Row } from "../../styles/global";
type State = {
    active?: boolean
    //TODO on click should be onClick: () => void, but not working 
    onClick: any;
}

type StateActive = {
    active: boolean
}

export const GlassesEffect = styled.div`
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0);
    backdrop-filter: blur(2.2px);
    -webkit-backdrop-filter: blur(2.2px);
`

export const Div = styled(GlassesEffect)`
    width: 100%;
    padding: 15px 0px;
    color: #f7f7f7;
    position: fixed;
    z-index: 3;
    height: 1rem;
`

export const RowLargeScreen = styled(Row)`
    flex-direction: row;
    @media (max-width: 790px) {
        display: none;
    }
`
export const RowSmallScreen = styled(Row)`
    display: none;
    @media (max-width: 790px) {
        display: flex;
        flex-direction: row;
    }
`

export const ResponsiveNavBar = styled(GlassesEffect)<StateActive>`
    text-align: center;
    transition: visibility 0s, opacity 0.5s linear;
    visibility: ${props => props.active ? 'visible' : 'hidden'};
    opacity: ${props => props.active ? '1' : '0'};
    height: ${props => props.active ? '100vh' : ''};
    margin: 15px 0 0 0;

    @media (min-width: 790px) {
        display: none;
    }
`
