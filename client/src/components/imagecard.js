 // --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React from 'react';

// Material-UI components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { CardActionArea } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

const styles = () => ({
    card: {
        height: 'auto',
        width: 'fit-content'
    },
    cardMedia: {
        height: 'auto',
        width: 'auto'
    }
});

const ImageCard = props => {
    const { poster, title, year, type, classes } = props;
    return (
        <React.Fragment>
            <Paper className={classes.card}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            title={title}
                            image={poster}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="subtitle1">
                                {title}
                            </Typography>
                            <Typography component="p">
                                {year}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Paper>
        </React.Fragment>
    )
};

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

export default withStyles(styles)(ImageCard);

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //