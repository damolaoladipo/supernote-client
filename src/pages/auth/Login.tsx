import React, { useEffect, useState } from 'react';
import Title from '../../components/title/Title';
import TextInput from '../../components/input/TextInput';
import PasswordInput from '../../components/input/PasswordInput';
import Button from '../../components/button/Button';
import IconButton from '../../components/button/IconButton';
import { Link } from 'react-router-dom';
import storage from '../../utils/storage.util';

const Login = () => {



    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('password')
    const [referral, setReferral] = useState<string>('')
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

                        <Title text='Create Your Account' color='brand-orange' size='fs-30' />
                        <p  className='fs-18 brand-grey font-dmsans' >Setting up an account takes less than one minute</p>

                        <div className="mrgb1"></div>

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
                                    type='text' 
                                    hasIcon={true}
                                    icon='fe-user'
                                    showFocus={true}
                                    placeholder='Username'
                                    onChange={(e) => { setReferral(e.target.value) }}
                                    />

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


                    <div className="column-2">  

                        <div className="hero-image">
                            <img id="heroImage" src={`${process.env.PUBLIC_URL}/images/assets/write.png`} className='pdl5 pd4 ' sizes='100px' alt="note-taking"/>
                        </div>

                        {/* <Title text='Ready to take your notes to the next level?' size='fs-20' /> */}


                        </div>
                    </div>

                </div>

            </div>

        </section>
        
        
        </>


    )


}

export default Login