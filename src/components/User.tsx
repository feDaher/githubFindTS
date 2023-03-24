import { UserProps } from "../types/user"
import {MdLocationPin} from 'react-icons/md'
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledUser = styled.div`
  background-color: #2b3566;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`
const StyledImg = styled.img`
  max-width: 150px;
  border-radius: 50%;
  border: 3px solid #021b41;
`
const StyledIcon = styled(MdLocationPin)`
  fill: #0FB6CA;
  font-size: 1.5rem;
  margin-right: 5px;
`
const StyledFollow = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 10px 0;
`
const StyledDivFollowers = styled.div`
 border-right: 1px solid white;
 padding: 5px 20px;
`
const StyledDivFollowing = styled.div`
 padding: 5px 0;
`
const StyledFF = styled.p`
  padding: 5px 10px;
  background-color: #0FB6CA;
  border-radius: 0.5rem;
  margin-top: 5px;
`
const StyledLink = styled.div`
  padding: 20px 30px;
  background-color: #021b41;
  border-radius: 1rem;
`

const User = ({login, avatar_url, followers, following, location }: UserProps) => {
  return (
    <StyledUser>
      <StyledImg src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p>
        <StyledIcon  />
        <span>{location}</span>
       </p>
      )}
      <StyledFollow>
        <StyledDivFollowers>
          <p>Seguidores:</p>
          <StyledFF>{followers}</StyledFF>
        </StyledDivFollowers>
        <StyledDivFollowing>
          <p>Seguindo:</p>
          <StyledFF>{following}</StyledFF>
        </StyledDivFollowing>
      </StyledFollow>
      <StyledLink>
       <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
      </StyledLink>
    </StyledUser>
  )
}

export default User