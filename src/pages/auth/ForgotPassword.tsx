import React, { useEffect, useState } from 'react';
import Title from '../../components/title/Title';
import TextInput from '../../components/input/TextInput';
import PasswordInput from '../../components/input/PasswordInput';
import Button from '../../components/Button/Button';
import IconButton from '../../components/Button/IconButton';
import { Link } from 'react-router-dom';
import storage from '../../utils/storage.util';

const ForgotPassword = () => {



    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('password')
    const [tab, setTab] = useState<string>('signup')

    useEffect(() => {

        setDefaultTab()

    }, [])

    const setDefaultTab = ( ) => {
        const val = storage.fetchData('active-tab')

        if (val) {
            setTab(val.toString())
        }
    }


    const toggleTab = (e: any, tab: string) => {
        if (e) { e.preventDefault() }
        setTab(tab)
        storage.keepData('active-tab', tab)
    }

    return (

        <>
        
        <section>

            <div className="container">
 
                <div className="container-inner">

                    <div className="pair left">

                    <div className="auth-form"> 

                        <Title text='Forgot Password' color='brand-green' size='fs-40' />
                        <p  className='fs-18 brand-gray font-dmsans' >Enter your email below, you will recieve an email with password reset link</p>

                        <div className="mrgb2"></div>

                        <div className='form-tab'>
                            <div className="inner">
                            <Link onClick={(e) => toggleTab(e, 'login')} to="" className={`tab login fs-14 font-dmsans-medium ${tab === 'login' ? 'active' : ''}`}>Login</Link>
                            <span className="pdl"></span>
                            <Link onClick={(e) => toggleTab(e, 'signup')} to="" className={`tab signup fs-14 font-dmsans-medium ${tab === 'signup' ? 'active' : ''}`}> Sign-Up</Link>
                            </div>
                        </div>
                        
                        <div className="mrgb2"></div>
                        {
                            tab === 'signup' && 
                            <>
                                <div className="form signup-form">

                                    <TextInput 
                                    type='email' 
                                    hasIcon={true}
                                    icon='fe-at-sign'
                                    showFocus={true}
                                    placeholder='Email Address'
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    />

                                    <div className='pdl40'></div>

                                    <PasswordInput 
                                    hasIcon={true}
                                    icon='fe-lock'
                                    showFocus={true}
                                    placeholder='Enter password'
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    />

                                    <div className='mrgb3'></div>

                                    <Button 
                                    text='Sign Up'
                                    onClick={(e) => { setPassword(e.target.value) }}
                                    />
                                </div>

                                <div className="mrgb2"></div>

                                <div className='auth-divider mrgb1'>
                                    <div className="line"></div>
                                    <span className='font-dmsans fs-15 brand-gray ui-absolute'>Or Continue with</span>
                                </div>

                                <div className='brand-icons'>

                                    <IconButton 
                                    icon={{
                                        type: 'image',
                                        url: 'images/assets/facebook-logo.png',
                                        name: 'apple logo'
                                    }} />

                                    <div className='pdl1'></div>

                                    <IconButton 
                                    icon={{
                                        type: 'image',
                                        url: 'images/assets/apple-logo.png',
                                        name: 'apple logo'
                                    }} />

                                    <div className='pdl1'></div>

                                    <IconButton 
                                    icon={{
                                        type: 'image',
                                        url: 'images/assets/google-logo.png',
                                        name: 'apple logo'
                                    }} />

                                </div>
                            </>
                        }

                         {
                            tab === 'login' && 
                            <>
                                <div className="form login-form">

                                    <TextInput 
                                    type='email' 
                                    hasIcon={true}
                                    icon='fe-at-sign'
                                    showFocus={true}
                                    placeholder='Email Address'
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    />

                                    <div className='pdl40'></div>

                                    <PasswordInput 
                                    hasIcon={true}
                                    icon='fe-lock'
                                    showFocus={true}
                                    placeholder='Enter password'
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    />

                                    <div className='mrgb3'></div>

                                    <Button 
                                    text='Login'
                                    onClick={(e) => { setPassword(e.target.value) }}
                                    />
                                </div>

                                <div className="mrgb2"></div>

                                <div className='auth-divider mrgb1'>
                                    <div className="line"></div>
                                    <span className='font-dmsans fs-15 brand-gray ui-absolute'>Or Continue with</span>
                                </div>

                                <div className='brand-icons'>

                                    <IconButton 
                                    icon={{
                                        type: 'image',
                                        url: 'images/assets/facebook-logo.png',
                                        name: 'apple logo'
                                    }} />

                                    <div className='pdl1'></div>

                                    <IconButton 
                                    icon={{
                                        type: 'image',
                                        url: 'images/assets/apple-logo.png',
                                        name: 'apple logo'
                                    }} />

                                    <div className='pdl1'></div>

                                    <IconButton 
                                    icon={{
                                        type: 'image',
                                        url: 'images/assets/google-logo.png',
                                        name: 'apple logo'
                                    }} />

                                </div>
                            </>
                        }



                        </div>                     

                    </div>


                    <div className="pair right">

                        <div></div>


                    </div>

                </div>

            </div>

        </section>
        
        
        </>


    )


}

export default ForgotPassword