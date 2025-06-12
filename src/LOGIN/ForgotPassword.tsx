import React, { useState, useEffect, useCallback } from 'react';

import './Style/ForgotPassword.css';
// import { useNavigate } from 'react-router-dom';
import Loading from '../Common/Loading';

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // const navigate = useNavigate();

    const handleCancel = useCallback(() => {
    setEmail('');
    setNewPassword('');
    setConfirmPassword('');
    window.close();
}, []);


    const handleSubmit = () => {
        if (email !== '') {
          alert('Please enter your email.');
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                alert('Password reset successful!');
            }, 2000);
        }
    };

    const handleSubmitPasswordChange = useCallback(() => {
    if (newPassword !== '' && confirmPassword !== '') {
        if (newPassword === confirmPassword) {
            alert('Password reset successful!');
        } else {
            alert('New Password and Confirm Password should be the same.');
        }
    } else {
        alert('Please enter your Passwords.');
    }
}, [newPassword, confirmPassword]);


    // useEffect(() => {
    //     const linkbtnSubmit = document.getElementById('linkbtnSubmit') as HTMLAnchorElement;
    //     if (linkbtnSubmit) {
    //         linkbtnSubmit.addEventListener('click', handleSubmitPasswordChange);
    //     }

    //     const linkbtnCancelBtn = document.getElementById('linkbtnCancelBtn') as HTMLAnchorElement;
    //     if (linkbtnCancelBtn) {
    //         linkbtnCancelBtn.addEventListener('click', handleCancel);
    //     }

    //     return () => {
    //         if (linkbtnSubmit) {
    //             linkbtnSubmit.removeEventListener('click', handleSubmitPasswordChange);
    //         }
    //         if (linkbtnCancelBtn) {
    //             linkbtnCancelBtn.removeEventListener('click', handleCancel);
    //         }
    //     };
    // }, [newPassword, confirmPassword]);

    useEffect(() => {
    const linkbtnSubmit = document.getElementById('linkbtnSubmit') as HTMLAnchorElement;
    if (linkbtnSubmit) {
        linkbtnSubmit.addEventListener('click', handleSubmitPasswordChange);
    }

    const linkbtnCancelBtn = document.getElementById('linkbtnCancelBtn') as HTMLAnchorElement;
    if (linkbtnCancelBtn) {
        linkbtnCancelBtn.addEventListener('click', handleCancel);
    }

    return () => {
        if (linkbtnSubmit) {
            linkbtnSubmit.removeEventListener('click', handleSubmitPasswordChange);
        }
        if (linkbtnCancelBtn) {
            linkbtnCancelBtn.removeEventListener('click', handleCancel);
        }
    };
}, [handleSubmitPasswordChange, handleCancel]);



    return (
        <div>
            {isLoading && <Loading />}
            <div id="divForgotPassword">
                <div id="divEMail">
                    <p>
                        <span className="title_text">Account Recovery</span>
                        <span id="ar_text">Please enter the email address you used when you signed up.</span>
                        <br />
                        <span id="fp_form_box">
                            <input
                                id="txtEmail"
                                type="email"
                                className="login_field login_fp"
                                placeholder="Email"
                                maxLength={50}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </span>
                    </p>
                </div>

                <div id="divNewPassword" className='divNewPasswordT'
                // style={{ display: 'none' }}
                >
                    <p>
                        <span className="title_text">Reset Password</span>
                        <span id="ar_text1">Please enter your New Password.</span>
                        <br />
                        <span id="fp_form_NPwd">
                            New Password<br />
                            <input
                                type="password"
                                id="txtNewPassword"
                                className="login_field"
                                maxLength={30}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </span>
                        <br />
                        <span id="fp_form_CPwd">
                            Confirm Password<br />
                            <input
                                type="password"
                                id="txtConfirmPassword"
                                className="login_field"
                                maxLength={30}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </span>
                    </p>
                </div>

                <div id="divOk" className="general_btn two_btn_lightbox" 
                // style={{ display: 'none' }}
                >
							    <span>OK</span>
                </div>

                <div className="button_box">
                    <a href='/FamilyLogin'
                        id="linkbtnCancelBtn" 
                        className="general_btn two_btn_lightbox two_btn_left"
                        onClick={handleCancel}
                    >
                        <span>Cancel</span>
                    </a>
                    <a href='/FamilyLogin'
                        id="linkbtnSubmit"
                        className="general_btn two_btn_lightbox"
                        onClick={handleSubmit}
                    >
                        <span>Submit</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
