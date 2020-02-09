import React from 'react'
import FormInput from './formInput.component'
import './singin.styles.css' 
import logo from '../../assets/logo.png'


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:'',
            errorA:'',
            classA:'hidden',
            errorB:'',
            classB:'hidden'
        }
    }
      handleSubmit =  event => {
            event.preventDefault();
    
            this.setState({email:'',password:''})
        }
    erro = () => {
            if(this.state.email == ""){
                this.setState({errorA:'2px solid #E87C03',classA:'show'})
            } else {
                this.setState({errorA:'2px solid green',classA:'hidden'})
            }
            }

    erroB = () => {
                if(this.state.email == ""){
                    this.setState({errorB:'2px solid #E87C03',classB:'show'})
                } else {
                    this.setState({errorB:'2px solid green',classB:'hidden'})
                }
                }        
        
        

      handleChange = event => {
          const {value,name} = event.target
          this.setState({[name]: value})
      }
    render(){
    return(
        <div className="backgroundLogin">
        <div className="shadows">
        <a href="/"><img href="#"className="logo"src={logo}/></a>
           <div className="loginform">
               <h1 className="SignIn">Sign In</h1>
               <form onSubmit={this.handleSubmit}> 
                <FormInput 
                onBlur={this.erro}
                name='email'
                type='email'
                label="Email or Phone Number"
                handleChange={this.handleChange}
                value={this.state.email}
                style={{borderBottom:this.state.errorA }}
                required
                />
                <span className={this.state.classA}>
                Please enter a valid email or phone number.
                </span>
               
                <FormInput 
                onBlur={this.erroB}
                name='password'
                type='password'
                label="Password"
                handleChange={this.handleChange}
                value={this.state.password}
                style={{borderBottom:this.state.errorB}}
                required
                />
                
                <p className={this.state.classB}>
                Your password must contain between 4 and 60 characters.
                </p>
                <div className="submit">
                <input className="button"type="submit" onClick = {() => this.props.history.push('/dashboard')} className="button" value="Sign In " />
                <input className="check"type="checkbox" value="remember-me"/><span className="check">remember me</span>
                <span className="help">Need help?</span>
                </div>
               
               </form>
           
           </div>
          
           </div>
           </div>
        )
    }
}




    

export default SignIn