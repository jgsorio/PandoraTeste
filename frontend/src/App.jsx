import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import './App.css'
import { TableBody, TableCell, TableHead, TablePagination, TableRow } from '@mui/material';
import api from './services/api';
import fileDownload from 'js-file-download'

function App() {
  const [votantes, setVotantes] = useState([]);
  const [infoVotantes, setInfoVotantes] = useState({})

  async function loadVotantes(offset = 0) {
    await api.get(`list?offset=${offset}`).then(data => {
      setVotantes(data.data.docs);
      setInfoVotantes(data.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  function handlePageChange(offset, event) {
    offset = event.target.dataset.testid == "KeyboardArrowRightIcon" ? parseInt(offset) + 1: parseInt(offset) - 1;
    loadVotantes(offset)
  }

  const handleDownload = (name, id) => {
    const template = `Olá ${name}, seja bem vindo(a) a votação!`;
    const fileName = `${id}-${name}.txt`;

    return fileDownload(template, fileName);
  }

  useEffect(() => {
    loadVotantes()
  }, [])

  return (
    <div className="App">
      <h1>Votantes</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { votantes.map((votante, key) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">{votante.id}</TableCell>
                <TableCell>{votante.nome}</TableCell>
                <TableCell>
                  <a className='btn-download' onClick={() => handleDownload(votante.nome, votante.id)}>Download</a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TablePagination
            rowsPerPage={infoVotantes.limit}
            component="div"
            count={infoVotantes.total}
            rowsPerPageOptions={1}
            page={infoVotantes.offset}
            onPageChange={(e) => handlePageChange(infoVotantes.offset, e)}
            ></TablePagination>
        </Table>
      </TableContainer>
    </div>
  )
}

export default App
