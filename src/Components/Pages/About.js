import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import * as DiIcons from "react-icons/di"
import * as ImIcons from "react-icons/im"


const ExpandMore1 = styled((props) => {
  const { expand1, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand1 }) => ({
  transform: !expand1 ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ExpandMore2 = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function RecipeReviewCard() {
  const [expanded1, setExpanded1] = React.useState(false);


  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  const [expanded2, setExpanded2] = React.useState(false);

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };


  return (
    <>
      <div className='bg-danger'><h1 className='text-center'>Über uns</h1></div>
      <div className='d-flex flex-wrap mt-5 justify-content-around ml-5 mr-5'>
        {/* Ventsislav Kolev */}
        <div>
          <Card sx={{ maxWidth: 345, marginTop: 5 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  <DiIcons.DiCodeigniter />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Ventsislav Kolev"
              subheader="Full Stack Web-Developer "
            />
            <CardMedia
              sx={{ borderRadius: "50%", padding: 3, width: "auto"}}
               sm={{height:50}}
              component="img"
              height="345"
              image="https://alfatrex.com/media/Propic1660050131962.jpg"
              alt="Ventsislav Kolev"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                DCI-Student - Full Stack Web Development | HTML | CSS | Bootstrap | React JS | NodeJS | MongoDB | MySQL
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              {/* Button Link */}

              <a href="https://www.xing.com/profile/Ventsislav_Kolev2/cv" target="_blank" rel='noreferrer'>
                <IconButton aria-label="ImXing">
                  <ImIcons.ImXing />
                </IconButton>
              </a>
              <a href="https://www.linkedin.com/in/ventsislav-kolev-955a4162/" target="_blank" rel='noreferrer'>
                <IconButton aria-label="ImLinkedin">
                  <ImIcons.ImLinkedin />
                </IconButton>
              </a>
              <a href="https://github.com/venskolev" target="_blank" rel='noreferrer'>
                <IconButton aria-label="ImGithub">
                  <ImIcons.ImGithub />
                </IconButton>
              </a>

              <ExpandMore1
                expand={expanded1}
                onClick={handleExpandClick1}
                aria-expanded={expanded1}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore1>
            </CardActions>
            <Collapse in={expanded1} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph></Typography>
                <Typography paragraph>
                  Ich comme aus Bulgarien, seit 2017 lebe in Köln.
                </Typography>
                <Typography paragraph>
                Ich bin derzeit Student bei DCI, WebDev<br />
  Ich lerne gerade alles rofl <br />
  Ich suche die Zusammenarbeit mit anderen Content-Erstellern<br />
  Ziele 2022: Weitere Projekte beisteuern | Fertigstellungsprojekt für DCI<br />
  Fun Fact: Ich liebe es zu wandern
                </Typography>
                <Typography paragraph>
                  

Meine bisherige Berufserfahrung hat mich gelehrt, geduldig und sorgfältig vorzugehen. Kundenkommunikation gehört zu meinen Stärken und ich habe stets positives Feedback erhalten. Teamgeist und Führungsvermögen können Sie selbstverständlich voraussetzen. Auch parallel zu meiner Weiterbildung zum Web-Develeoper beim DCI - Digital Career Institute, helfe ich meinen Kollegen als Tutor.
<Typography>
Das Programmieren ist meine große Leidenschaft. Ich führe seit 2017 einen erfolgreichen Blog, der Apps testet, bewertet und vergleicht. Auf diese Weise verbinde ich meine Leidenschaft mit nützlichen Informationen für andere.
</Typography>


                </Typography>
                <Typography>
                Ich beteilige mich an verschiedenen Projekten im Zusammenhang mit Webentwicklung und Fotografie. Fotografie ist auch meine große Leidenschaft, ich habe bald erfolgreich meinen Abschluss als professioneller Fotograf gemacht.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
        {/* Orhan Kadirov */}
        <div>
          <Card sx={{ maxWidth: 345, marginTop: 5 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  <DiIcons.DiCodeigniter />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Orhan Kadirov"
              subheader="Full Stack Web-Developer "
            />
            <CardMedia
              sx={{ borderRadius: "50%", padding: 3, width: "auto" }}
              // sm={{height:100}}
              component="img"
              height="345"
              image="https://alfatrex.com/media/Propic1660050025054.jpg"
              alt="Orhan Kadirov"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                DCI-Student - Full Stack Web Development | HTML | CSS | Bootstrap | React JS | NodeJS | MongoDB | MySQL
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              {/* Button Link */}

              <a href="https://www.xing.com/profile/Orhan_Kadirov/cv" target="_blank" rel='noreferrer'>
                <IconButton aria-label="ImXing">
                  <ImIcons.ImXing />
                </IconButton>
              </a>
              <a href="https://www.linkedin.com/in/orhan-kadirov/" target="_blank" rel='noreferrer'>
                <IconButton aria-label="ImLinkedin">
                  <ImIcons.ImLinkedin />
                </IconButton>
              </a>
              <a href="https://github.com/OrhanKadirov" target="_blank" rel='noreferrer'>
                <IconButton aria-label="ImGithub">
                  <ImIcons.ImGithub />
                </IconButton>
              </a>

              <ExpandMore2
                expand={expanded2}
                onClick={handleExpandClick2}
                aria-expanded={expanded2}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore2>
            </CardActions>
            <Collapse in={expanded2} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                  aside for 10 minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                  medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                  occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                  large plate and set aside, leaving chicken and chorizo in the pan. Add
                  pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                  stirring often until thickened and fragrant, about 10 minutes. Add
                  saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with artichokes and
                  peppers, and cook without stirring, until most of the liquid is absorbed,
                  15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                  mussels, tucking them down into the rice, and cook again without
                  stirring, until mussels have opened and rice is just tender, 5 to 7
                  minutes more. (Discard any mussels that don&apos;t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </div>
    </>
  );
}
