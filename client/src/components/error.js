// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React from 'react';

//Material-UI components
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// Components
import ImageCard from './imagecard';

// Images
import errorgif from '../images/errorgif.gif'

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

const styles = () => ({
    errorContainer: {
        height: 'fit-content',
        marginTop: '0.2em'
    }
});

// ------------------------------------------------------------------------------------------- //

const Error = props => {
    const { classes, singleTitle } = props;
    return (
        <Paper className={classes.errorContainer}>
            <ImageCard 
                poster={errorgif}
                error
                    ={
                        `Oops, it looks like '${singleTitle}' wasn't found`
                    }
            />
        </Paper>
    )
}

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

export default withStyles(styles)(Error);

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

