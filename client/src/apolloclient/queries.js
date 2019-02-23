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
        query retrieveTitle($titleId: String) {
            ByTitle(imdbID: $titleId) {
                Title
                Year
                Released
                Rated
                Runtime
                Plot
                Poster
                Genre
                Director
                Writer
                imdbID
            }
        }
    `;

// ------------------------------------------------------------------------------------------- //
