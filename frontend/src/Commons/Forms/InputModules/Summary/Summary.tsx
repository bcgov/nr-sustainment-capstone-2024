/**
 *
 * THIS IS A SKELETON!
 * THIS IS STILL TO BE IMPLEMENTED!
 *
 * @summary Farm Information Input Module
 * @description A module with input fields to be used in a Form Module
 * @author @GDamaso
 */
import InputModuleProps from 'src/Interface/InputModuleProps';
import InputModuleInterface from 'src/Interface/InputModuleinterface';
import PropTypes from 'prop-types';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { StyledFarmInfo } from './Summary.style';

const SummaryComponent: React.FC<InputModuleProps> = ({ farmDetails }) => {
  console.log(farmDetails);
  return (
    <StyledFarmInfo>
      <p>
        Farm Name:&nbsp;
        {farmDetails.FarmName}
      </p>
      <p>
        Year:&nbsp;
        {farmDetails.Year}
      </p>
      <p>
        Region:&nbsp;
        {farmDetails.FarmRegion}
      </p>
      <p>
        Berries:&nbsp;
        {farmDetails.HasBerries ? 'Yes' : 'No'}
      </p>
    </StyledFarmInfo>
  );
};
/* Ensures passed props are the correct data type.
isRequired returns a warning if the prop isn't provided.
PropTypes.shape is useful for key-value pairs. Such as below.
*/
SummaryComponent.propTypes = {
  farmDetails: PropTypes.shape({
    FarmName: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    FarmRegion: PropTypes.string.isRequired,
    HasBerries: PropTypes.bool.isRequired,
  }).isRequired,

};
const Summary: InputModuleInterface = {
  InputModuleComponent: SummaryComponent,
  id: 'Summary',
  name: { long: 'Summary', short: 'Summary' },
  faIcon: faList,
  enable: false,
};

export default Summary;
