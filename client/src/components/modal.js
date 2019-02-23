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
import { withStyles } from '@material-ui/core/styles';

// Apollo Queries
import { RETRIEVE_TITLE } from '../apolloclient/queries';

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

const ModalDialog = props => {
    const { open, handleClose, poster, title, year, classes, error, imdbID } = props;
    return (
        <Modal
            aria-labelledby="movie-description-of-props"
            aria-describedby="simple-modal-description"
            open={open}
        >
             <Dialog 
                open={open} 
                onClose={handleClose}
            >
                <Query query={RETRIEVE_TITLE} variables={{ imdbID: imdbID }} fetchPolicy='network-only'>	        
                    {({ loading, error, data }) => {	           
                        if (loading) {	                
                            return <div><CircularProgress /></div>;	                  
                        }
                        if(error) console.log(error);
                        console.log(data)
                        // <DialogTitle>{title}</DialogTitle>
                        // <DialogContent>
                        //     <DialogContentText>
                        //         You can set my maximum width and whether to adapt or not.
                        //     </DialogContentText>
                        // </DialogContent>
                        // <DialogActions>
                        //     <Button color="primary" onClick={handleClose}>
                        //         Close
                        //     </Button>
                        // </DialogActions>
                    }}	
                </Query>
            </Dialog>
        </Modal>
    )
};

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

export default ModalDialog;

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

