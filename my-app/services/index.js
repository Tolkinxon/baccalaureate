import { gql, request } from 'graphql-request'

const takingData = async () => {
  const key =
    'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clhzk311p2tj701upbgne20vs/master'
  const query = gql`
    query Assets {
      ratingAttendancesConnection {
        edges {
          node {
            attendance
            date
            group
            name
            score
            theme
            id
          }
        }
      }
    }
  `

  const result = await request(key, query)
  return result.ratingAttendancesConnection.edges
}

export default takingData
