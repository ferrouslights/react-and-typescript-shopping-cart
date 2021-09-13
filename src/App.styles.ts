import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
    margin: 40px;
`;

export const StyledButton = styled(IconButton)`
    position: fixed;
    z-index: 100;
    right: 20px;
    top: 20px;
    height: 60px;
    width: 60px;
    background: #FEB95F;
    border-radius: 45px;
    transition: transform .4s;

    :hover {
        background: #FECA85;
        transform: scale(1.2, 1.2);
    }
`;
