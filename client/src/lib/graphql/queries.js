import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient('http://localhost:9000/graphql');

export async function getJobs(){
    const query = gql`
        query {
            jobs {
            description
            id
            date
            title
            company {
                description
                id
                name
            }
        }
        }
    `;

    const data  = await client.request(query);
    return data.jobs;
}


export async function getJob(id){
    const query = gql`
        query JobById($id: ID!) {
            job(id: $id) {
                id
                description
                date
                title
                company {
                    id
                    description
                    name
                }
            }
        }
    `;

    const data  = await client.request(query);
    return data.job;
}