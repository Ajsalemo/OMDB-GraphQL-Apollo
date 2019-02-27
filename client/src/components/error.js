// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React from 'react';

//Material-UI components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { CardActionArea } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// Images
import errorgif from '../images/errorgif.gif'

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

const styles = () => ({
    errorContainer: {
        height: 'fit-content',
        marginTop: '0.2em'
    },
    errorComponent: {
        width: '28em'
    }
});

// ------------------------------------------------------------------------------------------- //

const Error = props => {
    const { classes, singleTitle } = props;
    return (
        <Paper className={classes.errorContainer}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={errorgif}
                        className={classes.errorComponent}
                    />
                    <CardContent style={{ textAlign: 'center' }}>
                        <Typography gutterBottom variant="subtitle1">
                            <span>Oops, it looks like <b>'{singleTitle}'</b> wasn't found</span>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Paper>
    )
}
// ------------------------------------------------------------------------------------------- //

Error.propTypes = {
    classes: PropTypes.object.isRequired,
    singleTitle: PropTypes.string
};

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

export default withStyles(styles)(Error);

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

