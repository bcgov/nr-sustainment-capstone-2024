import React from 'react';

const handleChange = (event: React.ChangeEvent<HTMLSelectElement>, setFieldValue: Function) => {
  setFieldValue(event.target.name, event.target.value);
};

export default handleChange;
