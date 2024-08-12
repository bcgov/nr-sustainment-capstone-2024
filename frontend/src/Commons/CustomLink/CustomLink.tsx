import { Link } from 'react-router-dom';
import StyledLinkContainer from './CustomLink.style';

type LinkSizes = 'sm' | 'md' | 'lg';

type LinkProps = {
  text: string;
  path: string;
  size?: LinkSizes;
  returnToCalc?: boolean;
  finishButton?: boolean;
};

const CustomLink = ({ text, size = 'md', path, returnToCalc, finishButton }: LinkProps) => (
  <StyledLinkContainer
    size={size}
    returnToCalc={returnToCalc}
    finishButton={finishButton}
  >
    <Link to={path}>{text}</Link>
  </StyledLinkContainer>
);

export default CustomLink;
