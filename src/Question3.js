import React from 'react';
import { CircularProgress, Grid, Snackbar, Typography, Card, CardActions, CardContent, IconButton, InputAdornment } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ListPage from './ListPage';
 
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    minWidth: '100%',
  }
});

class Question3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showProgress: false,
            email: "",
            password: "",
            emailValid: false,
            passwordValid: false,
            emailError: false,
            passwordError: false,
            showPassword: false,
            formValid: false,
            toggleForm: true,
            toggleList: false
        };
        this.toggleSelection = true;
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.forgotPassword = this.forgotPassword.bind(this);
        this.showHide = this.showHide.bind(this);
    }

    onInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value }, () => {
            this.validateField(name, value);
        });
    }

    validateField(fieldName, value) {
      var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
      let upperCase = /(?=.*[A-Z])/;
        switch (fieldName) {
            case 'email':
                this.setState({ emailValid: value.length > 0 }, this.validateForm); break;
            case 'password':
                this.setState({ passwordValid: (value.length > 8 && format.test(value) && upperCase.test(value) ) }, this.validateForm); break;
            default: break;
        }
    }

    showHide() {
        this.setState(state => ({ showPassword: !state.showPassword }));
    }

    validateForm() {
        this.setState({
            formValid: this.state.emailValid && this.state.passwordValid
        });
    }


    forgotPassword() {
        this.setState({
            toggleForm: false
        })
    }

    showNotification = (message) => {
        this.setState({
            showNotification: true,
            notification: message
        });
    }

    hideNotification = () => {
        this.setState({ showNotification: false });
    }

    onSubmit(event) {
        let { email, password } = this.state;
        var data = {
            email,
            password
        };
        if(this.state.formValid === true){
            this.setState({
              toggleList: true
            })
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
              {(this.state.toggleList) ? <ListPage /> :
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 justify-content-center align-items-center d-flex">
                            <div className="container p-5">
                                <ValidatorForm ref="form" onSubmit={this.onSubmit}>
                                    <label className="pt-5">Email Address <mark className="requiredStar">*</mark></label>
                                    <TextValidator fullWidth margin="normal"
                                        name="email"
                                        placeholder="e.g. john.smith@gmail.com"
                                        value={this.state.email}
                                        onChange={this.onInputChange}
                                        InputLabelProps={{ shrink: true }}
                                        validators={['required', 'isEmail']}
                                        errorMessages={['Email is required', 'Email is not valid']}
                                    />

                                    <label className="pt-5">Password <mark className="requiredStar">*</mark></label>
                                    <TextValidator fullWidth margin="normal"
                                        name="password"
                                        type={this.state.showPassword ? 'text' : 'password'}
                                        placeholder="*****"
                                        value={this.state.password}
                                        onChange={this.onInputChange}
                                        InputLabelProps={{ shrink: true }}
                                        validators={['required']}
                                        errorMessages={['password is required', 'Password Not Valid']}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment variant="filled" position="end">
                                                    <IconButton
                                                        onClick={this.showHide}
                                                    >
                                                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    
                                    <Grid container direction="row" justify="flex-end" spacing={32} >
                                        <Grid item>
                                            <br />
                                            <Button size="medium" type="submit" variant="contained" color="primary">Sign In</Button>
                                        </Grid>
                                    </Grid>
                                </ValidatorForm>
                            </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default withStyles(styles)(Question3);
