// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React from 'react';
import { Query } from "react-apollo";
import PropTypes from 'prop-types';

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
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

// Apollo Queries
import { RETRIEVE_TITLE } from '../apolloclient/queries';

// Images
import imagenotfound from '../images/imagenotfound.png';

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

const styles = theme => ({
    dialogPaper: {
        backgroundColor: '#e8f4ff',
        [theme.breakpoints.up(905)]: {
            display: 'flex',
            flexDirection: 'row',
            flex: 'none'
        }
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
        width: 'auto'
    },
    dialogImageGrid: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dialogPaperImage: {
        border: '4px solid #000',
        marginTop: '1em',
        textAlign: 'center'
    },
    dialogContent: {
        borderLeft: '1px solid #000',
        paddingBottom: '0'
    },
    dialogTitle: {
        paddingBottom: '0',
        [theme.breakpoints.up('xs')]: {
            textAlign: 'center'
        }
    },
    modalPaper: {
        maxHeight: 'fit-content'
    },
    modalPaperDialog: {
        border: '6px solid #000',
        minWidth: 'min-content'
    }
});

// ------------------------------------------------------------------------------------------- //
// These are the category types to be removed when displaying the rest of the information
// They have already been used in different parts of the modal
const filteredCategories = ['Plot', 'Title', 'Poster', 'Year', 'imdbID', '__typename'];

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
                                classes={{ 
                                    paperScrollPaper: classes.modalPaperDialog 
                                }}
                            >
                                <Paper className={classes.dialogPaper} elevation={17}>
                                    <Grid item xs={12} sm={12} className={classes.dialogImageGrid}>
                                        <Paper className={classes.dialogPaperImage} elevation={17}>
                                            <CardMedia
                                                component="img"
                                                title={data.ByTitle.Title}
                                                image={data.ByTitle.Poster === 'N/A' ? imagenotfound : data.ByTitle.Poster}
                                                className={classes.dialogImage}
                                            />
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <DialogTitle className={classes.dialogTitle}>{data.ByTitle.Title}</DialogTitle>
                                        <DialogContent className={classes.dialogContent}>
                                            <DialogContentText className={classes.dialogYear} gutterBottom>
                                                <b>{data.ByTitle.Year}</b>
                                            </DialogContentText>
                                            <DialogContentText className={classes.dialogPlot}>
                                                {data.ByTitle.Plot}
                                            </DialogContentText>
                                            {
                                                // Loop through the query object key/value pair - specifying ByTitle
                                                // Filter the results - if the category results from filters function doesn't match what's in the variable array..
                                                // Then map through the returned array from filter, displaying the data we are needing
                                                Object.entries(data.ByTitle)
                                                .filter(titles => filteredCategories.indexOf(titles[0]) === -1)
                                                    .map((filteredResults, i) => 
                                                        <ListItem className={classes.dialogInfoList} key={i}>
                                                            <ListItemText primary={filteredResults[0]} secondary={filteredResults[1]} />
                                                        </ListItem>
                                                    )
                                            }
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

ModalDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    imdbID: PropTypes.string.isRequired,
    handleClose: PropTypes.func
};

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

export default withStyles(styles)(ModalDialog);

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

