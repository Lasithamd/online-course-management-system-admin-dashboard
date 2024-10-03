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
import SchoolIcon from '@mui/icons-material/School';
import instance from '../../../service/AxiosOrder';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';

const columns = [
    { id: 'id', label: 'ID', minWidth: 3 },
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'phone', label: 'Phone', minWidth: 100 },
    { id: 'email', label: 'Email', minWidth: 100 },
    { id: 'course', label: 'Course', minWidth: 100 },
    { id: 'actions', label: 'Actions', minWidth: 100 }, // New actions column
];

export default function StudentData() {
    const navigate = useNavigate();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rows, setRows] = React.useState([]);
    const [open, setOpen] = React.useState(false); // Dialog state
    const [studentIdToDelete, setStudentIdToDelete] = React.useState(null); // ID of the student to delete

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    React.useEffect(() => {
        instance.get('/student')
            .then(function (res) {
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

    // Open the dialog
    const handleClickOpen = (id) => {
        setStudentIdToDelete(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setStudentIdToDelete(null);
    };

    const handleEdit = (id) => {
        navigate(`/student/edit/${id}`);
    };

    // Handle delete action
    const handleDelete = () => {
        console.log(studentIdToDelete)
        if (studentIdToDelete) {
            instance.delete(`/student/${studentIdToDelete}`)
                .then(() => {
                    // Update the rows after deletion
                    setRows(rows.filter((row) => row.id !== studentIdToDelete));
                    console.log("Student deleted successfully");
                })
                .catch((error) => {
                    console.error("Error deleting student:", error);
                });
            handleClose(); // Close dialog after deletion
        }
    };

    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id}>
                                                    {column.id === 'actions' ? (
                                                        <>
                                                            <Button onClick={() => handleEdit(row.id)} size="small">
                                                                <EditIcon fontSize="small" />
                                                            </Button>
                                                            <Button onClick={() => handleClickOpen(row.id)} size="small">
                                                                <DeleteIcon fontSize="small" />
                                                            </Button>
                                                        </>
                                                    ) : column.id === 'course' ? (
                                                        <>
                                                            <Button variant="outlined" onClick={() => onAddCourse(row.id)} startIcon={<SchoolIcon />}>
                                                                Add Course
                                                            </Button>                                    {/* You can also add logic to handle video upload if needed */}
                                                        </>
                                                    ) : (
                                                        value
                                                    )}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                ))}
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

            {/* Confirmation Dialog */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this student? This action cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
