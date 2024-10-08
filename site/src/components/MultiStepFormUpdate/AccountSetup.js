import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/logo-purple.png';
import { Input } from 'reactstrap';
import '../../pages/SignUp/style.css';

export default function AccountSetup(props){

    const [category, setCategory] = useState('Moda');

    const go = async e => {
        e.preventDefault();

        inputChange('category', category)

        props.nextStep();
    };

    const history = useHistory();

    function handleSubmit(){
        
    }

    function handleLogin(){
        history.push('/SignupC');
    }
    function handleHome(){
        history.push('/');
    }
    const { values, inputChange } = props;

    return (
        <div className='form-content-right'>
            
            <form onSubmit={handleSubmit} className='form-signup '>
            
            <div className='header-logo-img' onClick={handleHome}>
                    
                    <h1 className='title-form' 
                    style={{marginLeft: '25%', fontSize: '42px', marginBottom: '15%', marginTop: '10%'
                }}>Atualizar</h1>
                </div>
                <div className='form-inputs'>
                <input
                    className='form-input'
                    type='text'
                    name='username'
                    placeholder='Nome'
                    onChange={(e) => inputChange('name', e.target.value)} 
                    value={values.name}
                />
                </div>
                <div className='form-inputs'>

                <input
                    className='form-input'
                    type='text'
                    name='empresa_nome'
                    placeholder='Nome da empresa'
                    onChange={(e) => inputChange('companyName', e.target.value)} 
                    value={values.companyName}
                />
                
                </div>
                <div className='form-inputs'>
                <input
                    className='form-input'
                    type='text'
                    name='cnpj'
                    placeholder='CNPJ'
                    onChange={(e) => inputChange('cnpj', e.target.value)} 
                    value={values.cnpj}
                />
                
                </div>
                <div className='form-inputs'>
                <input
                    className='form-input'
                    type='text'
                    name='endereco'
                    placeholder='CEP'
                    onChange={(e) => inputChange('adress', e.target.value)} 
                    value={values.adress}
                />
                <select
                    id="exampleSelect"
                    name="select"
                    className='form-input'
                    placeholder='Categoria'
                    onChange={ (e) => setCategory(e.target.value)}
                    value={values.category}
                    >
                    <option>
                        Moda
                    </option>
                    <option>
                        Alimentos
                    </option>
                    <option>
                        Tecnologia
                    </option>
                    <option>
                        Estética
                    </option>
                    <option>
                        Outro
                    </option>
                </select>
                </div>
                <button className='form-input-btn' onClick={go}>
                Próximo
                </button>
                <span className='form-input-login'>
                Quer se cadastrar como cliente? Cadastro <a onClick={handleLogin}>aqui</a>
                </span>
            </form>
        </div>

    )
}

