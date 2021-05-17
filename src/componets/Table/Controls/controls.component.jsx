import React from 'react'

import  {
   Container,
   Button,
   Text,
   SearchInput
} from './controls.styles'

const Controls = ({
   changeSort,
   sort,
   changeGroup,
   group,
   search,
   changeSearch
}) => {
   return (
      <Container>
         <div>
            <Text>Group by: </Text>
            <Button active={group === 'mark'} onClick={() => changeGroup('mark')}>
               Mark
            </Button>
            <Button active={group === 'type'} onClick={() => changeGroup('type')}>
               Type
            </Button>
         </div>
         <div>
            <Text>Sort by: </Text>
            <Button active={sort === 'mark'} onClick={() => changeSort('mark')}>
               Mark
            </Button>
            <Button active={sort === 'type'} onClick={() => changeSort('type')}>
               Type
            </Button>
            <Button active={sort === 'year'} onClick={() => changeSort('year')}>
               Year
            </Button>
         </div>
         <div>
            <SearchInput
               placeholder='search...'
               value={search}
               onChange={(e) => changeSearch(e.target.value)}
            />
         </div>
      </Container>
   )
}

export default Controls