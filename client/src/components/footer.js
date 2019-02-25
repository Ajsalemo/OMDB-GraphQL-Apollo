// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React from 'react';

// Material-UI components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import { Typography } from '@material-ui/core';

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

const Footer = props => {
    const { lowerAppBar, lowerAppBarToolBar, footerTypography, githubURL, omdbURL, imdbURL, links } = props;
    return (
        <AppBar position="static" className={lowerAppBar}>
            <Toolbar className={lowerAppBarToolBar}>
                <Typography className={footerTypography}>
                    <Link href={githubURL} rel='noopener noreferrer' target='_blank' className={links}>
                        <i className="fab fa-github fa-2x"></i> 
                    </Link>
                    <Link href={omdbURL} rel='noopener noreferrer' target='_blank' style={{ alignSelf: 'center', color: '#000' }}>
                        OMDb API
                    </Link>
                    <Link href={imdbURL} rel='noopener noreferrer' target='_blank' className={links}>
                        <i className="fab fa-imdb fa-2x"></i>
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
};

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

export default Footer;

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //