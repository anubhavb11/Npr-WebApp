import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Redirect, Link} from 'react-router-dom'


const useStyles = makeStyles({
  root: {
      width: '20rem',
      height: '20rem',
      margin: '10rem 0rem'
  },
});

export default function Dashboard() {
  const classes = useStyles();

  const [user,setUser] = useState({});

  const response = window.localStorage.getItem('token');
  const data = JSON.parse(response);
  console.log(data);   
//   setUser(datap); 
  if(data == null){
    return  <Redirect to="/login" />
  }



  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="user-img"
          height="140"
          image= {data.Photo}
          title="user-img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Name: {data.Name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           User Type: {data.UserType} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Change Password
        </Button>
      </CardActions>
    </Card>
  );
}
