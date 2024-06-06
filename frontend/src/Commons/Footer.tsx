/**
 * @desc A footer with links to our terms of agreement and BC NMP Help resource
 *@author @GDamaso
 */
import StyledFooter from './Styles/Footer.style';

const termsURL = 'https://nmp.apps.nrs.gov.bc.ca/Information/Disclaimer';
const helpURL =
  'https://www2.gov.bc.ca/gov/content/industry/agriculture-seafood/agricultural-land-and-environment/soil-nutrients/nutrient-management/nutrient-management-calculator/support-for-the-bc-nutrient-management-calculator';

const Footer = () => (
  <StyledFooter>
    <p>
      By continuing, you agree to our&nbsp;
      <a href={termsURL}>Terms of Service</a>
    </p>
    <p>
      Need&nbsp;
      <a href={helpURL}>Help?</a>
    </p>
  </StyledFooter>
);

export default Footer;
