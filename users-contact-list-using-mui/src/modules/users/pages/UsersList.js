import React from 'react';
import { NavLink } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { Box, IconButton } from '@mui/material';
import useUsersList from '../hooks/useUsersList';

function UsersList() {
  const { list, deleteUser,loading } = useUsersList();
 
  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "surname",
      headerName: "Surname",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: '',
      headerName: 'Actions',
      headerAlign: 'center',
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Box sx={{ display: 'flex' }}>
            <IconButton
              to={params.id}
              component={NavLink}
            >
              <BorderColorIcon  />
            </IconButton>
            <IconButton
              onClick={() => {
                deleteUser(params.id)
              }}
            >
              <DeleteTwoToneIcon/>
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
   <div>{loading?('Loading..................'):(
    <DataGrid
      loading={false}
      sx={{minHeight: '500px'}}
      rows={list}
      columns={columns}
      editable
      pageSize={5}
      rowsPerPageOptions={[5]}
    />
    )}
    </div>
  )
}

export default UsersList