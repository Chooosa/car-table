import styled from 'styled-components'

export const RowWrapper = styled.tr`
   display: flex;
   flex-direction: column;
   cursor: pointer;
`

export const CellWrapper = styled.div`
   width: 100%;
   height: 50px;
   display: flex;
`

export const InfoWrapper = styled.div`
   width: 100%;
   display: flex;
   background-color: #E5E5E5;
   height: ${props => props.open ? '120px' : '0px' };
   transition-duration: 0.2s;
   border-left: 1px solid #000;
   border-right: 1px solid #000;
   padding: ${props => props.open ? '15px 0px' : '0px' };

   >div {
      visibility: ${props => props.open ? 'visible' : 'hidden' };
      transition-duration: ${props => props.open ? '0.1s' : '0s' };
   }
`

export const Cell = styled.div`
   width: 25%;
   height: 100%;
   padding: 0 15px;
   border: 1px solid ${props => props.nonBorder ? 'transparent' : '#000'};
   display: flex;
   flex-direction: column;
   justify-content: ${props => props.nonBorder ? 'flex-start' : 'center'};
   align-items: ${props => props.right ? 'flex-end' : 'flex-start'};
`

export const Text = styled.span`
   display: block;
   font-weight: ${props => props.bold ? '900' : '400'};
   line-height: 20px;
`