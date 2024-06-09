import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

interface InputModuleInterface {
  InputModuleComponent: React.ComponentType<{ className?: string }>;
  id: string;
  name: string;
  faIcon: IconDefinition;
  enable: boolean;
}
export default InputModuleInterface;
