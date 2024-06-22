import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';

type StyledLinkProps = {
  size: string;
};

const StyledLinkContainer = styled.div<StyledLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  height: ${(props) => (props.size === 'sm' ? '27px' : props.size === 'md' ? '25px' : '41.6px')};
  max-width: ${(props) =>
    props.size === 'sm' ? '52px' : props.size === 'md' ? '200px' : '301.6px'};
  background-color: ${tokens.surfaceColorPrimaryButtonDefault};
  color: ${tokens.typographyColorPrimaryInvert};
  border-radius: 8px;
  border: ${`1px solid ${tokens.surfaceColorBorderMedium}`};
  font-family: ${tokens.typographyFontFamiliesBcSans};
  font-weight: ${tokens.typographyFontWeightsBold};

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
    text-decoration: none;
    height: 100%;
    width: 100%;
    text-align: center;
    max-height: ${(props) =>
      props.size === 'sm' ? '27px' : props.size === 'md' ? '25px' : '41.6px'};
    max-width: ${(props) =>
      props.size === 'sm' ? '52px' : props.size === 'md' ? '200px' : '301.6px'};
  }
`;

export default StyledLinkContainer;
