// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import gql from "graphql-tag";

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

export const RETRIEVE_TITLE =
    gql`
        query retrieveTitle($singleTitle: String) {
            ByTitle(Title: $singleTitle) {
                Title
                Year
                Released
                Runtime
                Plot
            }
        }
    `;

export const RETRIEVE_SEARCH =
    gql`
        query retrieveSearch {
            BySearch {
                Title
                Year
                Released
                Runtime
                Plot
            }
        }
    `;

// ------------------------------------------------------------------------------------------- //
