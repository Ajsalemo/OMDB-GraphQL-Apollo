// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React from 'react';
import { Query } from "react-apollo";

// Material-UI components
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid, Paper } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

// Apollo Queries
import { RETRIEVE_TITLE } from '../apolloclient/queries';

// Images
import imagenotfound from '../images/imagenotfound.png';

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

const styles = () => ({
    dialogPaper: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#e8f4ff',
        border: '6px solid #000'
    },
    dialogYear: {
        borderBottom: '1px solid #000',
        paddingBottom: '0.3em'
    },
    dialogPlot: {
        padding: '0.6em 0'
    },
    dialogList: {
        borderTop: '1px solid #000',
        borderBottom: '1px solid #000'
    },
    dialogInfoList: {
        padding: '0'
    },
    dialogImage: {
        height: 'fit-content',
        width: 'auto',
    },
    dialogImageGrid: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dialogPaperImage: {
        border: '4px solid #000'
    },
    dialogContent: {
        borderLeft: '1px solid #000',
        paddingBottom: '0'
    },
    dialogTitle: {
        paddingBottom: '0'
    }
});

// ------------------------------------------------------------------------------------------- //

const ModalDialog = props => {
    const { open, handleClose, classes, imdbID } = props;
    return (
        <React.Fragment>
            <Query query={RETRIEVE_TITLE} variables={{ titleId: imdbID }} fetchPolicy='network-only'>	        
                {({ loading, error, data }) => {	           
                    if (loading) {	                
                        return <div><CircularProgress /></div>;	                  
                    }
                    if(error) console.log(error);
                    return (
                        <Modal
                            aria-labelledby="movie-description-of-props"
                            aria-describedby="simple-modal-description"
                            open={open}
                        >
                            <Dialog 
                                open={open} 
                                onClose={handleClose}
                                maxWidth={'lg'}
                                fullWidth={true}
                            >
                                <Paper className={classes.dialogPaper}>
                                    <Grid item xs={6} className={classes.dialogImageGrid}>
                                        <Paper className={classes.dialogPaperImage} elevation={17}>
                                            <CardMedia
                                                component="img"
                                                title={data.ByTitle.Title}
                                                image={data.ByTitle.Poster === 'N/A' ? imagenotfound : data.ByTitle.Poster}
                                                className={classes.dialogImage}
                                            />
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <DialogTitle className={classes.dialogTitle}>{data.ByTitle.Title}</DialogTitle>
                                        <DialogContent className={classes.dialogContent}>
                                            <DialogContentText className={classes.dialogYear} gutterBottom>
                                                <b>{data.ByTitle.Year}</b>
                                            </DialogContentText>
                                            <DialogContentText className={classes.dialogPlot}>
                                                {data.ByTitle.Plot}
                                            </DialogContentText>
                                            <List className={classes.dialogList}>
                                                <ListItem className={classes.dialogInfoList}>
                                                    <ListItemText primary="Released" secondary={data.ByTitle.Released} />
                                                </ListItem>
                                                <ListItem className={classes.dialogInfoList}>
                                                    <ListItemText primary="Rated" secondary={data.ByTitle.Rated} />
                                                </ListItem>
                                                <ListItem className={classes.dialogInfoList}>
                                                    <ListItemText primary="Runtime" secondary={data.ByTitle.Runtime} />
                                                </ListItem>
                                                <ListItem className={classes.dialogInfoList}>
                                                    <ListItemText primary="Genre" secondary={data.ByTitle.Genre} />
                                                </ListItem>
                                                <ListItem className={classes.dialogInfoList}>
                                                    <ListItemText primary="Director" secondary={data.ByTitle.Director} />
                                                </ListItem>
                                                <ListItem className={classes.dialogInfoList}>
                                                    <ListItemText primary="Writer" secondary={data.ByTitle.Writer} />
                                                </ListItem>
                                                <ListItem className={classes.dialogInfoList}>
                                                    <ListItemText primary="Language" secondary={data.ByTitle.Language} />
                                                </ListItem>
                                                <ListItem className={classes.dialogInfoList}>
                                                    <ListItemText primary="Awards" secondary={data.ByTitle.Awards} />
                                                </ListItem>
                                            </List>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button color="primary" onClick={handleClose}>
                                                Close
                                        </Button>
                                        </DialogActions>
                                    </Grid>
                                </Paper>
                            </Dialog>
                        </Modal>
                    )
                }}	
            </Query>
        </React.Fragment>
    )
};

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

export default withStyles(styles)(ModalDialog);

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

