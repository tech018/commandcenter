import { Box, Chip } from "@mui/material";
import {
  uApplications,
  useGetApplicationsMutation,
} from "../../store/application.slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../common/components/table";
export function Application() {
  const { application } = useSelector(({ application }) => ({
    application,
  }));
  const dispatch = useDispatch();
  const [reqApp, { data, isError, isLoading, isSuccess, error }] =
    useGetApplicationsMutation();

  useEffect(() => {
    reqApp();
  }, [reqApp]);

  useEffect(() => {
    if (isSuccess) {
      console.log("data", data);
      dispatch(uApplications(data.applications));
    }
  }, [data, isSuccess, dispatch]);

  return (
    <Box>
      <Table
        data={application.records.map(
          ({
            id,
            status,
            plateNumber,
            email,
            applicationType,
            vehicleType,
          }) => ({
            id,
            plateNumber,
            status: (
              <Chip
                label={status.toUpperCase()}
                color="primary"
                variant="outlined"
              />
            ),
            vehicleType,
            email,
            applicationType,
          })
        )}
      />
    </Box>
  );
}
