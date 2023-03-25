import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import styled from 'styled-components';

const StyledList = styled.ul` 
 display: flex;
 flex-direction: column;
 gap: 10px;
 text-decoration: none;
 list-style: none;
 margin-top: 1rem;
 background-color: #2b3566;
 border-radius: 1rem;
 padding: 1rem;
`
const StyledRepos = styled.li`
  border: 1px solid #fff;
  border-radius: 1rem;
  padding: 10px 20px;
  text-align: center;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  :hover{
    background-color: #021b49;
  }
`
const H2 = styled.h2`
  text-align: center;
`
interface Repo {
  id: number;
  name: string;
  html_url: string;
}

const Repos = () => {
  const { login } = useParams<{ login: string }>();
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${login}/repos`)
      .then((response: AxiosResponse<Repo[]>) => setRepos(response.data))
      .catch(error => console.log(error));
  }, [login]);

  return (
    <div>
      <H2>Os melhores projetos de {login}:</H2>
      <StyledList>
        {repos.map(repo => (
          <StyledRepos key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.name}
            </a>
          </StyledRepos>
        ))}
      </StyledList>
    </div>
  );
};

export default Repos;