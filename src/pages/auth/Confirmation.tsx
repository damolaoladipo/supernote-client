import React, { useEffect, useState } from 'react';
import Title from '../../components/title/Title';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import storage from '../../utils/storage.util';
import RadioInput from '../../components/input/RadioInput';

const Confirmation = () => {



    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('password')
    const [tab, setTab] = useState<string>('system')

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

                        <Title text='Lets confirm its you!' color='brand-green' size='fs-40' />
                        <p  className='fs-18 brand-gray font-dmsans' >Complete verification process</p>

                        <div className="mrgb2"></div>

                        <div className='form-tab'>
                            <div className="inner">
                            <Link onClick={(e) => toggleTab(e, 'system')} to="" className={`tab login fs-14 font-dmsans-medium ${tab === 'system' ? 'active' : ''}`}>System</Link>
                            <span className="pdl"></span>
                            <Link onClick={(e) => toggleTab(e, 'google')} to="" className={`tab signup fs-14 font-dmsans-medium ${tab === 'google' ? 'active' : ''}`}>Google</Link>
                            </div>
                        </div>
                        
                        <div className="mrgb2"></div>

                        {
                            tab === 'system' && 
                            <>
                                <div className="form signup-form">
                                
                                    <div className='mrgb3'></div>

                                    <RadioInput 
                                    name='Get the code by (SMS) at:'
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    
                                    />
                                    
                                    <div className='mrgb3'></div>

                                    <Button 
                                    text='Continue'
                                    onClick={(e) => { setPassword(e.target.value) }}
                                    />
                                </div>


                            </>
                        }

                        {
                            tab === 'google' && 
                            <>
                                <div className="form signup-form">
                                
                                    <div className='mrgb3'></div>

                                    <Button 
                                    text='Continue'
                                    onClick={(e) => { setPassword(e.target.value) }}
                                    />
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

export default Confirmation