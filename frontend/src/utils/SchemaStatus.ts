import { Schema } from 'yup';

const SchemaStatus = (
  validationSchema: Schema,
  values: any,
  handleFormState: (cmd: string, toggle?: boolean, status?: string) => void,
  inputModuleID: string,
) => {
  try {
    validationSchema.validateSync(values, { abortEarly: false });
    handleFormState(inputModuleID, undefined, 'completed');
  } catch (err: any) {
    handleFormState(inputModuleID, undefined, 'warning');
  }
};

export default SchemaStatus;
