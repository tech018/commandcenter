import {
  FilledInput,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const SecureInput = ({control, name, placeholder}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Controller
      control={control}
      render={({field: {onChange, onBlur, value}, formState: {errors}}) => (
        <FormControl fullWidth variant="filled">
          <InputLabel htmlFor="filled-adornment-password">
            {placeholder}
          </InputLabel>
          <FilledInput
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={errors[name]?.message ? true : false}
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="center">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                  onMouseDown={handleMouseDownPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          {errors[name]?.message && (
            <FormHelperText>{errors[name]?.message}</FormHelperText>
          )}
        </FormControl>
      )}
      name={name}
    />
  );
};

export default SecureInput;
