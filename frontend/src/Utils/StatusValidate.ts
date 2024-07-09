import { Schema } from 'yup';
import { COMPLETED, WARNING } from '@Constants/ModuleStatus';

/**
 * @desc   A validation function to update a form status depending
 *         on the validationSchema. This allows a more dynamic status
 *         feedback for the ProgressBar.
 * @author @GDamaso
 */
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
