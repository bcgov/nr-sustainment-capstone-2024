/**
 *
 * THIS IS A SKELETON!
 * THIS IS STILL TO BE IMPLEMENTED!
 *
 * @summary Farm Information Input Module
 * @description A module with input fields to be used in a Form Module
 * @author @GDamaso
 */
import InputModuleInterface from 'src/Interface/InputModuleinterface';
import { faList } from '@fortawesome/free-solid-svg-icons';
import InputModuleProps from 'src/Interface/InputModuleProps';
import { StyledFarmInfo } from './Summary.style';

const SummaryComponent: React.FC<InputModuleProps> = ({ farmDetails }) => (
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
      {farmDetails.HasBerries}
    </p>
  </StyledFarmInfo>
);

const Summary: InputModuleInterface = {
  InputModuleComponent: SummaryComponent,
  id: 'Summary',
  name: { long: 'Summary', short: 'Summary' },
  faIcon: faList,
  enable: false,
};

export default Summary;
