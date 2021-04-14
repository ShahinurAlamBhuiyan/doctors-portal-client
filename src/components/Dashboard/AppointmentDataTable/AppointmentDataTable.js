import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const AppointmentDataTable = ({appointments}) => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: '700' }}>Name</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Gender</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Age</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Weight</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Phone</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Email</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            appointments.map(appointment => (
                                <TableRow>
                                    <TableCell>{appointment.name}</TableCell>
                                    <TableCell>{appointment.gender}</TableCell>
                                    <TableCell>{appointment.age}</TableCell>
                                    <TableCell>{appointment.weight}</TableCell>
                                    <TableCell>{appointment.phone}</TableCell>
                                    <TableCell>{appointment.email}</TableCell>

                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
    );
};

export default AppointmentDataTable;