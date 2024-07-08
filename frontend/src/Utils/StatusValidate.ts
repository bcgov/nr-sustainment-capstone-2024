import { Schema } from 'yup';
import { COMPLETED, WARNING } from '@Constants/ModuleStatus';

const StatusValidate = (
  validationSchema: Schema,
  values: any,
  handleFormState: (cmd: string, toggle?: boolean, status?: string) => void,
  inputModuleID: string,
) => {
  try {
    validationSchema.validateSync(values, { abortEarly: false });
    handleFormState(inputModuleID, undefined, COMPLETED);
  } catch (err: any) {
    handleFormState(inputModuleID, undefined, WARNING);
  }
};

export default StatusValidate;
