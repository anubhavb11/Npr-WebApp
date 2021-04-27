import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Sidebar from '../sidebar'
import AnubhavImg from './img/anubhav.jpg';
import JoyetaImg from './img/joyeta.jpg';
import ArjitImg from './img/Arjit.jpeg';
import NikhilImg from './img/Nikhil.jpg';
import NishaImg from './img/Nisha.jpg';
import RahulImg from './img/Rahul.jpg';
import SiddhantImg from './img/Siddhant.jpg';
import PiyushImg from './img/Piyush.jpg';
import AdityaImg from './img/Aditya.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: '18rem',
    height: '25rem',
    margin: '5rem 2rem'
  },
  media: {
    height: '15rem',
  },
});

export default function Dev() {
  const classes = useStyles();

  return (

    <div className="right_of_sidebar">

      <Sidebar/>

      <div className="dev_list">
        
        <div className="dev_heading">
          <h2>
          Developers
          </h2> 
        </div>
      
        <div className="dev_list_1">

          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={AnubhavImg}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Anubhav Bansal
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Delhi Technical Campus
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={JoyetaImg}
                title="Joyeta Saha"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Joyeta Saha
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Delhi Technical Campus
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={NishaImg}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Nisha
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Delhi Technical Campus
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>


        
        </div>
      

        <div className="dev_list_2">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={NikhilImg}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Nikhil 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Delhi Technical Campus
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={RahulImg}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Rahul
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Delhi Technical Campus
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>


          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={ArjitImg}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Arijit
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Delhi Technical Campus
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>


         


         


        </div>

        <div className="dev_list_3">

            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={SiddhantImg}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Siddanth 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  SCRIET,CCS University Campus,Meerut
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

             <Card className={classes.root}>

            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={PiyushImg}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Piyush
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Sushila Devi Bansal College Of Technology 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>


          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={AdityaImg}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Aditya
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Delhi Technical Campus
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          
        </div>

      </div>

      


    </div>
    
  );
}
