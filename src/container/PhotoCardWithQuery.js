import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import Skeleton from 'react-loading-skeleton'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!){
    photo(id:$id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

const renderProp = ({ loading, error, data }) => {
  if (loading) {
    return <div><Skeleton width={500} height={280} />
      <Skeleton variant='circle' width={40} height={40} />
      <Skeleton width={110} />
    </div>
  }
  if (error) return <p>Error!</p>

  const { photo = {} } = !!data && data
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>

)
