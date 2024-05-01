import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import InputField from "../../../common/components/input/index";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../../common/schema/auth";
import { Link } from "react-router-dom";
import LogoWithText from "../../logiwithtext";
import { useNavigate } from "react-router-dom";
import {
  ucredentials,
  usePostLoginUserMutation,
} from "../../../store/auth.slice";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loginRequest, { data, isError, isLoading, isSuccess, error }] =
    usePostLoginUserMutation();
  const { handleSubmit, control, setError } = useForm({
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    if (isError) {
      setLoading(false);
      setError("email", { type: "custom", message: error.data.message });
    }
  }, [isError, setError, error]);

  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    }
  }, [isLoading]);

  useEffect(() => {
    if (isSuccess) {
      setLoading(false);
      dispatch(ucredentials(data));
      navigate(data.redirect);
      sessionStorage.setItem("access", data.token);
    }
  }, [isSuccess, dispatch, data, navigate]);

  function onSubmit(data) {
    loginRequest(data);
  }

  return (
    <Paper elevation={0} sx={{ height: "90vh", backgroundColor: "#fcfbf7" }}>
      <Box {...{ width: "350px", padding: 5 }}>
        <Box {...{ marginTop: 2, marginBottom: 5 }}>
          <LogoWithText />
        </Box>
        <Typography variant="h5" {...{ marginBottom: 2 }}>
          Welcome
        </Typography>
        <Box {...{ marginBottom: 2 }}>
          <InputField
            control={control}
            variant="default"
            placeholder="Enter your email address"
            name="email"
          />
        </Box>
        <Box>
          <InputField
            control={control}
            variant="secure"
            placeholder="Enter your password"
            name="password"
          />
        </Box>
        <Box {...{ marginTop: 4 }}>
          <Button
            type="button"
            onClick={handleSubmit(onSubmit)}
            sx={{ borderRadius: "20px" }}
            fullWidth
            size="large"
            variant="contained"
          >
            {loading ? "Logging in.." : "Login"}
          </Button>
        </Box>
        <Box {...{ textAlign: "center" }}>
          <Typography {...{ paddingTop: 2 }}>
            Forgot <Link to="/forgot">Password?</Link>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default LoginForm;
