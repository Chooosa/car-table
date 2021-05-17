import React, { useState } from 'react'

import {
   RowWrapper,
   Cell,
   CellWrapper,
   InfoWrapper,
   Text
} from './row.styles'

const Row = ({data}) => {
   const [open, setOpen] = useState(false);

   return (
      <RowWrapper onClick={() => setOpen((c)=> !c)}>
         <td style={{padding: 0}}>
            <CellWrapper>
               <Cell>{data.mark}</Cell>
               <Cell>{data.model}</Cell>
               <Cell>{data.type}</Cell>
               <Cell>{data.year}</Cell>
            </CellWrapper>
            <InfoWrapper open={open}>
               <Cell nonBorder>
                  <Text bold>Year</Text>
                  <Text>{data.year}</Text>
                  <Text bold>Options</Text>
                  <Text>{data.option}</Text>
               </Cell>
               <Cell nonBorder right>
                  <Text bold>Color</Text>
                  <Text>{data.Color}</Text>
               </Cell>
               <Cell nonBorder right>
                  <Text bold>Country</Text>
                  <Text>{data.country}</Text>
               </Cell>
               <Cell nonBorder/>
            </InfoWrapper>
         </td>
      </RowWrapper>
   )
}

export default Row