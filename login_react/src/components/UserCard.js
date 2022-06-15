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

export default function UserCard(props) {
    //paper style 
    const paperStyle={padding: '20px 20px', width:400, margin:'20px auto'}
    //style function
    const classes = useStyles();
    //values
    const[email, setEmail] = useState('');
    const[password1, setPassword1] = useState('');
    const[password2, setPassword2] = useState('');
    

    const handleClick=(e)=>{
        e.preventDefault();
            if(password1 === password2 && password1 !== '' && password2 !== ''){
                 //saving in a json
                const user = {email, password1}
                console.log(user)
                //cadastro
                //saving in database
                //create database and fetch
                /*fetch(url, {
                    method: "POST",
                    headers: {"Content-Type" : "application/json"},
                    body:  JSON.stringify(user)
                    }).then(()=>{
                    console.log("New User added")
                })
                }*/
            }
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
                    value = {password1}
                    onChange={(e)=>setPassword1(e.target.value)}
                    style={{margin: '6px'}}
                    />
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth
                    value = {password2}
                    onChange={(e)=>setPassword2(e.target.value)}
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
