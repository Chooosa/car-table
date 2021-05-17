import React, { useEffect, useState } from 'react'

import { Container, TableWrapper } from './table.styles'
import initialData from '../../assets/data.json'
import Row from './Row/row.component'
import Controls from './Controls/controls.component'

const Table = () => {
   const [data, setData] = useState([...initialData])
   const [sort, setSort] = useState('none')
   const [group, setGroup] = useState('none')
   const [search, setSearch] = useState('')

   const changeSort = (name) => {
      if(sort === name) {
         setSort('none')
      } else {
         setSort(name)
         setGroup('none')
      }
   }

   const changeGroup = (name) => {
      if(group === name) {
         setGroup('none')
      } else {
         setGroup(name)
         setSort('none')
      }
   }

   const changeSearch = (word) => {
      setSearch(word)
   }

   const onSorting = (field) => {
      if (field === 'year') {
         return (a, b) => a[field] < b[field] ? 1 : -1
      } else {
         return (a, b) => a[field] > b[field] ? 1 : -1
      }
   }

   useEffect(() => {
      let arr = [...data]
      // console.log(arr)

      switch (sort) {
         case 'mark':
            arr.sort(onSorting('mark'))
            break;
         case 'type':
            arr.sort(onSorting('type'))
            break;
         case 'year':
            arr.sort(onSorting('year'))
            break;
         case 'none':
            arr = [...initialData]
            break;
         default:
            break;
      }

      setData([...arr])
   }, [sort])


   const onGroup = (field) => {
      // let arr = [...data]
      // let newArr = arr.filter((name) => {})
      // let name = ''
      // let count = 0


      // // const temp = arr.reduce((prevValue, elem) => {

      // // })

      // arr.map((item, index, newArray) => {
      //    name = item[field]
      //    // console.log('name', name)

      //    newArray.map((elem) => {
      //       // console.log('name', name , 'elem[field]', elem[field], 'name === elem[field]', name === elem[field])
      //       if (name === elem[field]) {

      //          newArr.push(elem)
      //          count++
      //       }
      //    })
      // })

      // console.log('newArr', newArr)
   }

   useEffect(() => {
      let arr = []
      switch (group) {
         case 'mark':
            // arr.sort(onSorting('mark'))
            // onGroup
            onGroup('mark')
            break;
         case 'type':
            // arr.sort(onSorting('type'))
            onGroup('type')
            break;
         case 'none':
            arr = [...initialData]
            break;
         default:
            break;
      }

      setData([...arr])
   }, [group])

   useEffect(() => {
      let arr = [...data]
      let newArr = []

      if(search.length > 2) {
         const text = search.toLowerCase()
         console.log(text)
         arr.map((elem) => {
            if(elem['mark'].toLowerCase().indexOf(text) >=0 || elem['model'].toLowerCase().indexOf(text) >=0
            || elem['type'].toLowerCase().indexOf(text) >=0 || elem['year'].toLowerCase().indexOf(text) >=0
            ) {
               newArr.push(elem)
            }
         })
         arr = [...newArr]
      }
      if(search.length < 3) {
         arr = [...initialData]
      }
      console.log(newArr)
      setData([...arr])
   }, [search])

   return (
   <Container>
      <Controls
         sort={sort}
         changeSort={changeSort}
         group={group}
         changeGroup={changeGroup}
         search={search}
         changeSearch={changeSearch}
      />
      <TableWrapper>
         <tbody>
            {
               data.map((elem, index) => {
                  return (
                     <Row
                        key={index}
                        data={elem}
                     />
                  )
               })
            }
         </tbody>
      </TableWrapper>
   </Container>
   )
}

export default Table