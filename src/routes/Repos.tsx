import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';

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
      <h2>Os melhores projetos de {login}:</h2>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Repos;