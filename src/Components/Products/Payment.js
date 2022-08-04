import React, {useRef} from 'react'
import { Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';

import ProgressBar from './ProgressBar';

import { useUser } from '../../Context/UserContext';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

import AddCardIcon from '@mui/icons-material/AddCard';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FaCcAmex, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';
import { SiKlarna } from 'react-icons/si'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from 'react-toastify';

const theme = createTheme();

const Payment = () => {
  
  const { firstName, lastName } = useUser();
  const toastId = useRef(null);

  const CloseButton = ({ closeToast }) => (
    
    <i
      className="material-icons"
      onClick={closeToast}
    >
      OK.
    </i>
  );


  const handleSubmit = () => {
    toastId.current = toast.warning("Dies ist ein Demoshop Projektarbeit für Digital Career Institute Final Project — Bestellungen werden nicht ausgeführt.", {
      autoClose: false,
      position: toast.POSITION.BOTTOM_CENTER,
      theme: "dark"
    })
  };
  return (
    <section>
      <div className='jumbotron p-1'>
        <h5>
          <ProgressBar pos2 />
        </h5>
      </div>
      <div className='container border py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <ThemeProvider theme={theme}>
              <Container component="main" maxWidth="sm">
                <Typography component="h1" variant="h2">
                  Zahlungsart
                </Typography>
                <hr />
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar sx={{ bgcolor: 'secondary.main' }}>
                    <AddCardIcon />
                  </Avatar>
                  <Box sx={{
                    marginTop: 1,
                    display: 'flex',
                    flexDirection: 'wrap',
                    gap: 1,
                    alignItems: 'center',
                    fontSize: 50
                  }}>
                    <FaCcVisa />
                    <FaCcMastercard />
                    <FaCcAmex />
                  </Box>
                  <Typography component="h1" variant="h5">
                    Bezahlen mit Karte
                  </Typography>
                  <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={20}>

                        <TextField
                          autoComplete="given-name"
                          name="vollName"
                          required
                          fullWidth
                          id="vollName"
                          label="Name (Vor, -Nachname)"
                          value={firstName}{...lastName}
                          autoFocus
                        // onChange={(e) => {
                        //   setFirstName(e.target.value);
                        // }}
                        />
                      </Grid>
                      <Grid item xs={20}>
                        <TextField
                          //required
                          fullWidth
                          name="iban"
                          label="IBAN DE"
                          //value='fName'
                          type="text"
                          id="iban"
                          autoComplete="iban"
                        // onChange={(e) => {
                        //   setPassword(e.target.value);
                        // }}
                        />
                      </Grid>
                      <Grid item xs={20}>
                        <Typography>oder</Typography>
                        <TextField
                          fullWidth
                          id="Kartennummer"
                          label="Kartennummer"
                          name="Kartennummer"
                          autoComplete="Kartennummer"
                        // onChange={(e) => {
                        //   setEmail(e.target.value);
                        // }}
                        />
                      </Grid>
                      <Grid item xs={20} sm={3}>
                        <TextField
                          required
                          fullWidth
                          name="gültig"
                          label="Gültig bis"
                          // value='Numer'
                          type="text"
                          id="gültig"
                          autoComplete="gültig"
                        // onChange={(e) => {
                        //   setPassword(e.target.value);
                        // }}
                        />
                      </Grid>
                      <Grid item xs={20} sm={3}>
                        <TextField
                          required
                          fullWidth
                          name="pZiffer"
                          label="Prüfziffer"
                          //value='fName'
                          type="text"
                          id="pZiffer"
                          autoComplete="pZiffer"
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
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    onClick={handleSubmit}
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
              <hr />
              <Container component="main" maxWidth="sm">
                <Box
                  sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar sx={{ bgcolor: 'secondary.main' }}>
                    <AddCardIcon />
                  </Avatar>
                  <Box
                    sx={{
                      marginTop: 8,
                      display: 'flex',
                      flexDirection: 'wrap',
                      gap: 2,
                      alignItems: 'center',
                    }}
                  >
                    <Typography component="h1" variant="h5">
                      PayPal bezahlen
                    </Typography>
                    <Button
                      onClick={handleSubmit}
                      size='large'
                    >
                      <FaCcPaypal style={{ fontSize: 30 }} />
                    </Button>

                    <Typography component="h1" variant="h5">
                      Klarna bezahlen
                    </Typography>
                    <Button
                      onClick={handleSubmit}
                      size='large'
                    >
                      <SiKlarna style={{ fontSize: 30, backgroundColor: "#e5a492", width: 60 }} />
                    </Button>
                  </Box>
                </Box>
                <ToastContainer
         closeButton={CloseButton} 
         transition={Zoom} 
         style={{ width: "300px", bottom: "25rem" }} />
              </Container>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </section>
  )
};


export default Payment;