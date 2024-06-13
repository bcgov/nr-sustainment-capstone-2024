import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

const StyledMainFooter = styled.div`
    background-color: ${tokens.themeBlue100};
    height: 34px;
    position: fixed;
    width: 100vw;
    bottom: 0;

    @media (min-width: ${screenSizes.desktop}){
        background-color: transparent;
    }
`;

export default StyledMainFooter;
