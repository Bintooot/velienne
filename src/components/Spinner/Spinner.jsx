import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

const Spinner = () => {
  return (
    <Stack
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1c1c1c",
      }}
    >
      <CircularProgress sx={{ color: "#d4af37" }} />
    </Stack>
  );
};

export default Spinner;
