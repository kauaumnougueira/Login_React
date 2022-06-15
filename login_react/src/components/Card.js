import  React, {useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import { Container ,Paper , Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        
      },
    },
  }));

export default function Card(props) {
    //paper style 
    const paperStyle={padding: '20px 20px', width:400, margin:'20px auto'}
    //style function
    const classes = useStyles();
    //values
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleClick=(e)=>{
        e.preventDefault();
        //saving in a json
        const user = {email, password}
        console.log(user)
        //saving in database
        //create database and fetch
        /*fetch(url, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body:  JSON.stringify(user)
            }).then(()=>{
            console.log("New student added")
        })
        }*/
    }

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1> {props.pageName} </h1>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="E-mail" variant="outlined" fullWidth
                    value = {email}
                    onChange={(e)=>setEmail(e.target.value)}
                    style={{margin: '6px'}}
                    />
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth
                    value = {password}
                    onChange={(e)=>setPassword(e.target.value)}
                    style={{margin: '6px'}}
                    />
                    <Button variant="contained" color="primary" onClick={handleClick}>
                        Submit
                    </Button>
                </form>
            </Paper>
        </Container>
    );
}
