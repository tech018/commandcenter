import {
  FilledInput,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
} from "@mui/material";

import React from "react";
import { Controller } from "react-hook-form";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const DefaultInput = ({ control, name, placeholder }) => {
  return (
    <Controller
      control={control}
      render={({
        field: { onChange, onBlur, value },
        formState: { errors },
      }) => (
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
            type="text"
            endAdornment={
              <InputAdornment position="center">
                <AccountCircleIcon
                  style={{ paddingLeft: "4px", marginLeft: "3.8px" }}
                />
              </InputAdornment>
            }
          />
          {errors[name]?.message && (
            <FormHelperText sx={{ color: "red" }}>
              {errors[name]?.message}
            </FormHelperText>
          )}
        </FormControl>
      )}
      name={name}
    />
  );
};

export default DefaultInput;
