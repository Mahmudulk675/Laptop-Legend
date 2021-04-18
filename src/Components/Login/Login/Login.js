import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faGoogle, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons' 

library.add(faFacebookF); 
// import LoginBg from '../../../images/loginBg.png';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        console.log(result.user);

        const {displayName, email, photoURL} = result.user;
        const signedInUser = {customerName: displayName, customerEmail: email,customerPhotoURL: photoURL}

      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

  return (
    <div className="login-page container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-danger">Forgot your password?</label>
          </div>
          <div className="from-group mt-5">
            <button className="btn btn-success" onClick={handleGoogleSignIn}><FontAwesomeIcon  icon={faGoogle} /> Google Sign in</button>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={`https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fnz%2Fsearch%3Fk%3Dlogin%2Bbackground%2Bimages&psig=AOvVaw1bSXlgRAJjyWzyh-VdnhMT&ust=1618727369161000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPiPxsXThPACFQAAAAAdAAAAABAD`} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;