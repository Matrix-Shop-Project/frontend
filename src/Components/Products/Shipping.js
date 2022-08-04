import { Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

import ProgressBar from './ProgressBar';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

import BusinessIcon from '@mui/icons-material/Business';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Shipping = () => {
  const nav = useNavigate();
  const { firstName, lastName } = useUser();


  const handleSubmit = (event) => {
    event.preventDefault();
   
    nav("/payment");
  };
  return (
    <section>
      <div className='jumbotron p-1'>
        <h5>
          <ProgressBar pos1/>
        </h5>
      </div>
      <div className='container border py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <BusinessIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          Lieferadresse
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={20} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Vorname"
                  value={firstName}
                  autoFocus
                  // onChange={(e) => {
                  //   setFirstName(e.target.value);
                  // }}
                />
              </Grid>
              <Grid item xs={20} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Nachname"
                  value={lastName}
                  name="lastName"
                  autoComplete="family-name"
                  // onChange={(e) => {
                  //   setLastName(e.target.value);
                  // }}
                />
              </Grid>
              <Grid item xs={20}>
                <TextField
                  //required
                  fullWidth
                  name="fName"
                  label="Firmen Name"
                  //value='fName'
                  type="text"
                  id="fName"
                  autoComplete="fName"
                  // onChange={(e) => {
                  //   setPassword(e.target.value);
                  // }}
                />
              </Grid>
              <Grid item xs={20} sm={8}>
                <TextField
                  required
                  fullWidth
                  id="straße"
                  label="Starße "
                  name="Straße"
                  autoComplete="straße"
                  // onChange={(e) => {
                  //   setEmail(e.target.value);
                  // }}
                />
              </Grid>
              <Grid item xs={20} sm={4}>
                <TextField
                  required
                  fullWidth
                  name="numer"
                  label="Numer"
                 // value='Numer'
                  type="text"
                  id="numer"
                  autoComplete="numer"
                  // onChange={(e) => {
                  //   setPassword(e.target.value);
                  // }}
                />
              </Grid>
              <Grid item xs={20} sm={4}>
                <TextField
                  required
                  fullWidth
                  name="plz"
                  label="PLZ"
                 // value='Numer'
                  type="text"
                  id="plz"
                  autoComplete="plz"
                  // onChange={(e) => {
                  //   setPassword(e.target.value);
                  // }}
                />
              </Grid>
              <Grid item xs={20} sm={8}>
                <TextField
                  //required
                  fullWidth
                  name="stadt"
                  label="Ort"
                  //value='fName'
                  type="text"
                  id="stadt"
                  autoComplete="stadt"
                  // onChange={(e) => {
                  //   setPassword(e.target.value);
                  // }}
                />
              </Grid>
              <Grid item xs={12}>
                {/* <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick={() => {
              //   signUp(firstName, lastName, email, password);
              // }}
            >
              Weiter
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
          </div>
        </div>
      </div>
    </section>
  )
};


export default Shipping;