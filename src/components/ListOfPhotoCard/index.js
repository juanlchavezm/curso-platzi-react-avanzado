import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { photos } from '../../../api/db.json'

export const ListOfPhotoCard = () => (
  <ul>
    {
      photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
    }
  </ul>
)
