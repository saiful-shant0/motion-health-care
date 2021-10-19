import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../FireBase/Firebasee.init";

initializeAuthentication()
function Email() {
    const [email, setEmail] = useState('')
    const [password, setPasswoed] = useState('')
    const [error, setError] = useState('');
    const [islogin, setLogIn] = useState(false);
    const [name, setName] = useState('')
    const [user, setUser] = useState('')
    const auth = getAuth();





    const toggleLogin = e => {
        setLogIn(e.target.checked)
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleEmailChangr = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPasswoed(e.target.value)

    }
    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must Be atleast 6 Character')
            return;


        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }
        islogin ? processLogin(email, password) : RegisterNewUser(email, password)



    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {

                setUser(result.user);

                setError('');
            })
            .catch((error) => {

                setError(error.message)
            });
    }
    const RegisterNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {

                setUser(result.user);

                setError('');
                verifyEmail();
                setUserName();
            })

            .catch(error => {
                setError(error.message);
            })
    }
    const setUserName = (() => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {
                // Profile updated!
                // ...
            })
    })
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {

            });
    }
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {

            })
            .catch((error) => {

                setError(error.message);
                // ..
            });
    }

    return (
        <div >
            <form onSubmit={handleRegistration}>
                <h3 className="text-primary text-center mb-4">Please {islogin ? 'Log In' : 'Register'}</h3>
                {!islogin && <div className="row mb-3">
                    <label htmlFor="inputAddress" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">

                        <input onBlur={handleNameChange} type="text" className="form-control" id="inputAddress" placeholder="Enter your name" />
                    </div>

                </div>}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChangr} type="email" className="form-control" id="inputEmail3" placeholder="Enter Your Email" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" placeholder="Enter Password" required />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">

                    </div>
                </div>
                <div className="row mb-3 text-danger"  >{error}</div>
                <button type="submit" className="btn btn-primary w-100">{islogin ? 'Log In' : 'Register'}</button>
                <div className="form-check mt-3">
                    <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                    <label className="form-check-label" htmlFor="gridCheck1" />
                    Already Register ?

                </div>
                <button onClick={handleResetPassword} type="button" className="btn btn-link">Forgotten Password ?</button>
            </form>

        </div>

    );
}


export default Email;