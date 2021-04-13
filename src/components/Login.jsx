// // Example JS object used for CSS styling
import React from 'react'
// const styles = {
//     facebookBtn: {
//       backgroundColor: 'rgb(51, 89, 157)'
//     },
//     form: {
//       textAlign: 'center'
//     },
 

// btn:{
// backgroundColor: 'rgba(36, 41, 44, .9)',
// border: 'none',
// width: '100%',
// textAlign: 'center',
// padding: '14px',
// borderRadius: '4px',
// color: 'white'
// }

//   }

//    export default class Login extends React.Component {
//     handleOnSubmit = (e) => {
//       e.preventDefault();
//       console.log('Submitted!');
//     };
//     render() {
//       return (
//           <form  className='loginPage' style={styles.form} onSubmit={this.handleOnSubmit}>
//             <h4>Welcome Back!</h4>
//             <div className='form-group row'>
//               <input className='input' type='text' placeholder='Email'/>
//             </div>
//             <div className='form-group row'>
//               <input className='input' type='password' placeholder='Password'/>
//             </div>
//             <div style={styles.btn} className='form-group row'>
//               <button className='btn' type='submit'>Log In</button>
//             </div>
           
//           </form>
        
//       )
//     }
//   }
 
  
 

export default class Login extends React.Component{
    render(){
      return(
         <div className="container-login">
          <div className="form-box">
            <div className="header-form">
              <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
              <div className="heading-login">
                  Monaal Creation
              </div>
            </div>
            <div className="body-form">
            
             <form>
                <div className="input-group mb-3">
{/*                     
     <div className="input-group-prepend">
      <span className="input-group-text"><i class="fa fa-user"></i></span>
    </div> */}
    <input type="text" className="form-control" placeholder="Username" />
  </div>
   <div className="input-group mb-3">
     {/* <div className="input-group-prepend">
      <span className="input-group-text"><i class="fa fa-lock"></i></span>
    </div> */}
    <input type="text" className="form-control" placeholder="Password" />
  </div>
   <button type="button" className="btn button-login btn-secondary btn-block">LOGIN</button>
   <div className="message">
  <div><input type="checkbox" /> Remember ME</div>
   <div><a href="#">Forgot your password</a></div>
   </div>
     </form>
              <div className="social">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter-square"></i></a>
                <a href="#"><i className="fab fa-google"></i></a>
              </div>
            </div>
          </div>
         </div>   
      )
    }
  }
  
