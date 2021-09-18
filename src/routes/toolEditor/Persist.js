import axios from 'axios'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons/'
import { useParams } from 'react-router'

const Persist = ({ steps }) => {
  const { tool } = useParams()

  const persist = async () => {
    const body = {
      toolName: tool,
      steps,
    }
    try {
      const { data } = await axios.post('/persist-tool', body)
      alert(data)
    } catch (err) {
      console.error(err)
      alert(err.message)
    }
  }

  return <FontAwesomeIcon icon={faDatabase} onClick={persist} />
}

export default Persist
