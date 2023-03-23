type SearchProps = {
  loadUser: (userName: string) => Promise<void>
}
import { BsSearch } from 'react-icons/bs'
import { SetStateAction, useState } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  color: #000000;
  border: none;
  padding: 0.5rem;
  border-radius: 5px;
`
const StyledSearch = styled.div`
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
const StyledButton = styled.button`
  margin-left: 0.5rem;
  padding: 0.5rem;
  background-color: #021b41;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("")
  return (
    <StyledSearch>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div>
        <StyledInput 
          type="text" 
          placeholder="Digite o nome do usuário" 
          onChange={(e: { target: { value: SetStateAction<string> } }) => setUserName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter'){
              loadUser(userName)
            }
          }}
        />
        <StyledButton onClick={() => loadUser(userName)}>
          <BsSearch />
        </StyledButton>
      </div>
    </StyledSearch>
  )
}

export default Search