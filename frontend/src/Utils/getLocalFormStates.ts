import LoacalStorageNames from '@Constants/LocalStorageNames';
import InputModuleInterface from '@Interface/InputModuleinterface';

const getLocalFormStates = () => {
  const stateStr = localStorage.getItem(LoacalStorageNames.FORM_STATES);
  try {
    if (stateStr) return JSON.parse(stateStr);
  } catch (err) {
    console.error(err);
  }
  return null;
};

const loadLocalFormStates = (
  mockBerriesWorkflow: InputModuleInterface[],
): InputModuleInterface[] => {
  const localStates: InputModuleInterface[] = getLocalFormStates();

  if (localStates && Array.isArray(localStates)) {
    return mockBerriesWorkflow.map((module) => {
      const localModule = localStates.find((local) => local.id === module.id);
      if (localModule) {
        return {
          ...module,
          status: localModule.status,
          enable: localModule.enable,
        };
      }
      return module;
    });
  }

  return mockBerriesWorkflow;
};

export { loadLocalFormStates, getLocalFormStates };
