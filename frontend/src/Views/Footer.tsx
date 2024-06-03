/**
 * @desc A footer with links to our terms of agreement and BC NMP Help resource
 *@author @GDamaso
 */
import StyledFooter from './Footer.style';

const Footer = () => (
  <StyledFooter>
    <p>
      By continuing, you agree to our
      <a href="https://nmp.apps.nrs.gov.bc.ca/Information/Disclaimer">Terms of Service</a>
    </p>
    <p>
      Need
      <a href="https://www2.gov.bc.ca/gov/content/industry/agriculture-seafood/agricultural-land-and-environment/soil-nutrients/nutrient-management/nutrient-management-calculator/support-for-the-bc-nutrient-management-calculator">
        Help?
      </a>
    </p>
  </StyledFooter>
);

export default Footer;
