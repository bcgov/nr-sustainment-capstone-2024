/**
 * @summary Interface for the Input Modules
 * @description Describes how an InputModule such as 'FarmInformation' should be implemented.
 * @author @GDamaso
 */
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import InputModuleProps from './InputModuleProps';

/**
 *
 * @param InputModuleComponent => A react component with the input
 *                                fields required by the from section
 * @param id: The identifier to help in dinamic rendering
 * @param name: The name to be placed on the form section header
 * @param faIcon: The icon to be placed on the form section header
 * @param enable: If the form section should be opened upon rendering
 */
interface InputModuleInterface {
  InputModuleComponent: React.ComponentType<InputModuleProps>;
  id: string;
  name: {
    long: string;
    short?: string;
  };
  faIcon: IconDefinition;
  enable: boolean;
}
export default InputModuleInterface;
