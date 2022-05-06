import React from "react";
import { AppBar, Toolbar, Box, Typography } from "@material-ui/core";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

function Navbar() {

    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    function goLogout() {
        setToken('')
        alert("Usuário Deslogado")
        navigate('/login')
    }
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box className='cursor' >
                        <Link to="/home" className="text-decorator-none">
                            <Typography variant="h5" className="tituloNavbar">
                                Blog Pessoal
                            </Typography>
                        </Link>
                    </Box>


                    <Box mx={1} className='cursor' display="flex" justifyContent="start">
                        <Link to="/home" className="text-decorator-none">
                            <Typography variant="h6" className="tituloNavbar">
                                Home
                            </Typography>
                        </Link>
                    </Box>

                    <Box mx={1} className='cursor' >
                        <Link to="/postagens" className="text-decorator-none">
                            <Typography variant="h6" className="tituloNavbar">
                                Postagens
                            </Typography>
                        </Link>
                    </Box>

                    <Box mx={1} className='cursor' >
                        <Link to="/temas" className="text-decorator-none">
                            <Typography variant="h6" className="tituloNavbar">
                                Temas
                            </Typography>
                        </Link>
                    </Box>

                    <Box mx={1} className='cursor' >
                        <Link to="/formularioTema" className="text-decorator-none">
                            <Typography variant="h6" className="tituloNavbar">
                                Cadastrar Tema
                            </Typography>
                        </Link>
                    </Box>
                    <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" className="tituloNavbar">
                            Logout
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
