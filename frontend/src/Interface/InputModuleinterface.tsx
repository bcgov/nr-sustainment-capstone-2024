import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import InputModuleProps from './InputModuleProps';

interface InputModuleInterface {
  InputModuleComponent: React.ComponentType<InputModuleProps>;
  id: string;
  name: string;
  faIcon: IconDefinition;
  enable: boolean;
}
export default InputModuleInterface;
