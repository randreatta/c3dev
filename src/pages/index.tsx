import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getEmpresas, getAreas } from '../../services/http';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        C3
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function MainPage() {


  var [buttonUm, setButtonUm] = useState(false);
  var [buttonDois, setButtonDois] = useState(false);

  var [empresas, setEmpresas] = useState();
  var [areas, setAreas] = useState()


  async function testeEspera() {
    if (buttonUm) {
      console.log("ButtonUm = true");
      const emp = await getEmpresas();
      console.log(empresas);
      setEmpresas(emp.data)
      setAreas([]);
      setButtonUm(false);
    }
    if (buttonDois) {
      console.log("ButtonUm = true");
      const areass = await getAreas();
      setAreas(areass.data);
      setEmpresas([]);
      setButtonDois(false);
    }
  }
  testeEspera();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Aplicação C3
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Algum texto significativo para mim ...
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" color="warning" onClick={() => {
                setButtonUm(true);
                setButtonDois(false);
              }}>Listar Empresas</Button>
              <Button variant="outlined" onClick={() => {
                setButtonUm(false);
                setButtonDois(true)
              }}>Listar Areas</Button>
            </Stack>
          </Container>
        </Box>


        <div className="container">
          <h3 className="p-3 text-center">Lista de Empresas</h3>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Site</th>
              </tr>
            </thead>
            <tbody>
              {empresas && empresas.map(empresa =>
                <tr key={empresa.id}>
                  <td>{empresa.nome}</td>
                  <td>{empresa.site}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        
        <div className="container">
          <h3 className="p-3 text-center">Lista de Areas</h3>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              {areas && areas.map(area =>
                <tr key={area.id}>
                  <td>{area.nome}</td>
                  <td>{area.descricao}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Rodapé
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider >
  );
}