import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { ListService } from "../../services/api";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "nome",
      headerName: "nome",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "servicos",
      headerName: "Serviços",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "valor",
      headerName: "Valor Inscrito",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          R$ {params.row.valor}
        </Typography>
      ),
    },
    {
      field: "recorrencia",
      headerName: "Recorrência",
      flex: 1,
    },
  ];



  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await ListService();
      setUsers(response.data);
      setLoading(false);
    })();
  }, [])

  return (
    <Box m="20px">
      <Header title="Lista de Planos / Serviços" subtitle="Lista de clientes" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={users} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
