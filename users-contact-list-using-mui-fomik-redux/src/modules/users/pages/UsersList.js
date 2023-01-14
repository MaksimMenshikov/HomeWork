import React from 'react';
import { NavLink } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { Box, IconButton } from '@mui/material';
import { selectList,selectIsLoading } from '../../../store/selectors/users';
import { useSelector } from 'react-redux';
import { deleteUser} from '../../../store/actions/users';
import { useDispatch } from 'react-redux';

function UsersList() {
  const list = useSelector(selectList);
  const loading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
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
                dispatch(deleteUser(params.id));
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
  
    <DataGrid
      loading={loading}
      sx={{minHeight: '500px'}}
      rows={list}
      columns={columns}
      editable
      pageSize={9}
      rowsPerPageOptions={[9]}
    />
    
  )
}

export default UsersList