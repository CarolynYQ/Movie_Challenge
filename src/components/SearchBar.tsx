import { FormEvent, useState, useContext } from 'react'
import { useFetch } from '../hooks/useFetch';
import { DataContext } from '../context/DataContext';


// interface Props {
//   handleChange: (e: string) => void
// }

const SearchBar/*: React.FC<Props> */= () => {

  const [searchText, setSearchText] = useState('');
  const { setQuery, error } = useContext(DataContext)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    //const valueText = e.target.value;
    setQuery(searchText);
    console.log(searchText)
  }


    
  return (
    <>
      <div className='Menu-Form'>
        <form id='Form' onSubmit={ handleSubmit }>
        <input className='Menu-Form__search' id='Search' placeholder='Search movies or series' typeof='search' value={searchText} onChange={e => setSearchText(e.target.value)}></input>
        <button className='Search-Button' type='submit'><img className='Search-Icon' src="src/assets/icon_search.svg"/></button>
        </form>
      </div>
    </>
  )
}

export default SearchBar




    // //valor del input
    // const valueSearch = props.value
    // //función que actualiza la variable de estado
    // const handleChange = (e: any) => {
    //  const valueTextUser = e.target.value;
    //  props.handleChange(valueTextUser);
    // }

    // const handleClick = () => {
    //     console.log(valueSearch)
    // }