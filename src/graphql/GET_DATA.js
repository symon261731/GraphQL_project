import {gql} from '@apollo/client';

export const GET_DATA = gql`
    query GetLocations {
        locations {
            id
            name
            description
            photo
        }
    }
`;