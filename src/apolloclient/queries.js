// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import gql from "graphql-tag";

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

export const titleQuery = 
    gql`
        mutation titleQuery($dynamicSearch: String) {
            titleQuery(Title: $dynamicSearch) @rest(type: "Title", path: "t={args.Title}") {
                Title
                Rated
                Released
                Runtime
            }
        }
    `;

export const retrieveTitle =
    gql`
        query retrieveTitle($titleInfo: String) {
            retrieveTitle(Title: $titleInfo) @rest(type: "Title", path: "t={args.Title}") {
                Title
                Rated
                Released
                Runtime
            }
        }
    `;

// ------------------------------------------------------------------------------------------- //
