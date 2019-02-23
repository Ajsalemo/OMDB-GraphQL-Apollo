// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import gql from "graphql-tag";

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

export const RETRIEVE_SEARCH =
    gql`
        query retrieveSearch($singleTitle: String) {
            BySearch(Title: $singleTitle) {
                Title
                Year
                Type
                Poster
                imdbID
            }
        }
    `;

export const RETRIEVE_TITLE =
    gql`
        query retrieveTitle($imdbID: String) {
            ByTitle(Title: $imdbID) {
                Title
                Year
                Released
                Runtime
                Plot
                imdbID
            }
        }
    `;

// ------------------------------------------------------------------------------------------- //
