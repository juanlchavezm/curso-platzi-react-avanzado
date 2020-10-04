import React from 'react'
import { PhotoCard } from '../PhotoCard'

/* const withPhotos = graphql(gql`
query getPhotos {
  photos {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`) */

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {
        [1, 2, 3, 4].map(id => <PhotoCard key={id} id={id} />)
      }
    </ul>
  )
}

/* export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent) */
