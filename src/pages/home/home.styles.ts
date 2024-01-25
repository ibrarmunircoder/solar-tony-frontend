import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";

export const StyledDataGrid = styled(DataGrid)((theme) => ({
  border: 0,
  "& > .MuiDataGrid-main": {
    "& .MuiDataGrid-columnHeaderTitle": {
      borderBottom: "1px solid #F5F5F5",
      fontWeight: "600 !important",
      fontSize: "17px",
    },

    "& div div div div > .MuiDataGrid-cell": {
      borderBottom: "none",
    },
  },

  "& .MuiDataGrid-row": {
    borderBottom: "1px solid #F5F5F5",
    "& .MuiDataGrid-cell": {
      wordWrap: "break-word !important",
      whiteSpace: "normal !important",
      fontWeight: 500,
      fontSize: "13px",
    },
    "&.Mui-selected .MuiDataGrid-cell": {
      color: `#333 !important`,
    },
  },

  "& .MuiDataGrid-sortIcon": {
    color: "white",
  },
  "& .MuiDataGrid-menuIconButton": {
    color: "white",
  },

  "& .MuiDataGrid-iconButtonContainer": {
    visibility: "visible !important",
  },
  "& .MuiDataGrid-virtualScroller::-webkit-scrollbar": {
    width: "15px",
  },
  "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track": {
    background: "#fff",
  },
  "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb": {
    backgroundColor: "",
    borderRadius: "10px",
  },
  "& .MuiDataGrid-footerContainer": {
    display: "flex",
    justifyContent: "center",
    border: "none",
  },
}));
