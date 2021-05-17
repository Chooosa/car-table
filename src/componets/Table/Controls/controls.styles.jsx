import styled from 'styled-components'

export const Container = styled.div`
   width: 100%;
   margin-bottom: 20px;
   display: flex;
   align-items: center;
   justify-content: space-between;
`

export const Button = styled.button`
   width: 60px;
   height: 30px;
   border: 1px solid #000;
   outline: none;
   background-color: ${props => props.active ? '#FF0000' : '#CCCCCC'};
   color: ${props => props.active ? '#fff' : '#000'};
   margin: 0 8px;
   border-radius: 2px;
   cursor: pointer;
   opacity: 1;
   transition-duration: 0.2s;

   :hover {
      opacity: 0.8;
      transition-duration: 0.2s;
   }
`

export const Text = styled.span`
   font-weight: bold;
`

export const SearchInput = styled.input`
   width: 180px;
   height: 30px;
   border: 1px solid #000;
   outline-color: #0586ff;
   background-color: #CCCCCC;
   padding: 0 15px;
   border-radius: 2px;
`
