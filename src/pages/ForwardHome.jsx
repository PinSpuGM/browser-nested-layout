import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ForwardHome = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/home')
  }, [])
  return <><h1>FORWAR TO HOME</h1></>
}

export default ForwardHome
