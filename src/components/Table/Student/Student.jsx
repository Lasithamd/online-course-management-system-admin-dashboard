import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import instance from '../../../service/AxiosOrder';
import { useNavigate } from 'react-router-dom'; 

const columns = [
    { id: 'id', label: 'ID', minWidth: 3 },
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'phone', label: 'Phone', minWidth: 100 },
    { id: 'email', label: 'Email', minWidth: 100 },
    { id: 'actions', label: 'Actions', minWidth: 100 }, // New actions column
];

function createData(id, name, phone, email) {
    return { id, name, phone, email };
}

export default function StudentData() {
    const navigate = useNavigate();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rows, setRows] = React.useState([]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    React.useEffect(() => {
        instance.get('/student')
            .then(function (res) {
                // Set the fetched data to the state
                setRows(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleEdit = (id) => {
        navigate('/student/edit/',id); 
       
        // Implement your edit functionality here
    };

    const handleDelete = (id) => {
        console.log('Delete student with ID:', id);
        // Implement your delete functionality here
        // For example, you might want to call an API to delete the student:
        // instance.delete(`/student/${id}`).then(() => { /* handle success */ }).catch(error => { /* handle error */ });
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id}>
                                                    {column.id === 'actions' ? (
                                                        <div>
                                                            <Button onClick={() => handleEdit(row.id)} size="small">
                                                                <EditIcon fontSize="small" />
                                                            </Button>
                                                            <Button onClick={() => handleDelete(row.id)} size="small">
                                                                <DeleteIcon fontSize="small" />
                                                            </Button>
                                                        </div>
                                                    ) : (
                                                        value
                                                    )}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
