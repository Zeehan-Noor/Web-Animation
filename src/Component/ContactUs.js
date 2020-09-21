import React, { useRef, useEffect } from "react";
import lottie from 'lottie-web';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./ContactUs.css";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
export default function ContactUs() {
    const ref = useRef();
    useEffect(() => {
        lottie.loadAnimation({
            container: ref.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require('./Data/Contact.json')
        })
    }, [])
    const classes = useStyles();
    return (
        <div className="ContactContainer">
            <div align="center" id="leftContactbox">
                <h1>Contact US</h1>

                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Enter Name" />
                    <br />
                    <TextField id="standard-basic" label="Enter Last Name" />
                    <br />
                    <TextField id="standard-basic" label="Enter Email" />
                    <br />
                    <TextField id="standard-basic" label="Phone Number" />
                </form>
                <br />
                <Button variant="contained" color="secondary">
                    Submit
                </Button>
            </div>
            <div align="center" id="rightContactbox" ref={ref}></div>
        </div>
    )
}
