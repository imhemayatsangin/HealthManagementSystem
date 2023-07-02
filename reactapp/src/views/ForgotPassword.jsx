import {Link} from "react-router-dom";
export default function ForgotPassword(){

    const onSubmit = ev => {
        ev.preventDefault()
    }

return(

    <div className="login-signup-form animated fadeInDown">
    <div className="form">
      <form onSubmit={onSubmit}>
        <h1 className="title">Reset Password</h1>

      

        <input type="email" placeholder="Enter Your Email"/>
      
        <button className="btn btn-block">Reset</button>

        <p className="message"> Go to login page! <Link to="/login">Login</Link></p>
      </form>
    </div>
  </div>

)
  




}