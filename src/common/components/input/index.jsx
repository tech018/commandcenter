import {forwardRef} from 'react';
import DefaultInput from './default';
import SecureInput from './secure';

export const inputComponents = {
  default: DefaultInput,
  secure: SecureInput,
};

const InputField = forwardRef(({variant, ...props}, ref) => {
  const Component = inputComponents[variant];
  const _props = {...props, ref};

  if (Component)
    return <Component {..._props} /> ?? <DefaultInput {..._props} />;
});

export default InputField;
