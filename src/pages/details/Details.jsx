import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const details = () => {
  const {mediaType,id}=useParams();
  const {data,loading}=useFetch(`/movie/{movieId}`)
  return (
    <div>details</div>
  )
}

export default details;