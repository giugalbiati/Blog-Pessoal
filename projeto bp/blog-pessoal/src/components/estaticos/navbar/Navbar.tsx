import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addToken } from '../../../store/tokens/actions';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './Navbar.css';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    let history = useHistory();
    const dispatch = useDispatch();
    
    function goLogout(){
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/login')
    }

    var navbarComponent;

    if(token != ""){
        navbarComponent = <AppBar position="static">
        <Toolbar variant="dense" className='backgroundNB'>
        <Link to="/home" className="text-decorator-none">
            <Box className='cursor'>
                <Typography variant="h5" color="inherit" className='bpTitulo'>
                    BlogPessoal
                </Typography>
            </Box>
        </Link>

            <Box display="flex" justifyContent="start" className='gap'>
                <Link to="/posts" className="text-decorator-none">
                    <Box mx={1} className='cursor marginlft displayitens'>
                        <Typography variant="h6" color="inherit" className='bpTexto'>
                            posts
                        </Typography>
                    </Box>
                </Link>
                <Link to="/temas" className="text-decorator-none">
                <Box mx={1} className='cursor displayitens'>
                    <Typography variant="h6" color="inherit" className='bpTexto'>
                        temas
                    </Typography>
                </Box>
                </Link>
                <Link to="/formularioTema" className="text-decorator-none">
                <Box mx={1} className='cursor displayitens'>
                    <Typography variant="h6" color="inherit" className='bpTexto'>
                        +tema
                    </Typography>
                </Box>
                </Link>
                    <Box mx={1} className='cursor' onClick={goLogout}>
                    <Typography variant="h6" color="inherit" className='bpTexto FEl'>
                        logout
                    </Typography>
                    </Box>
                
            </Box>

        </Toolbar>
    </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;