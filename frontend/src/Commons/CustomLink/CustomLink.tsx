import { Link } from 'react-router-dom';
import StyledLinkContainer from './CustomLink.style';

type LinkSizes = 'sm' | 'md' | 'lg';

type LinkProps = {
  text: string;
  path: string;
  size?: LinkSizes;
};

const CustomLink = ({ text, size = 'md', path }: LinkProps) => (
  <StyledLinkContainer size={size}>
    <Link to={path}>{text}</Link>
  </StyledLinkContainer>
);

export default CustomLink;
