import { FormEvent } from 'react'

interface Props {
  onTriggerSearch: () => void;
  onSearchChange: (e: string) => void
}

const SearchBar: React.FC<Props>= ({onTriggerSearch, onSearchChange}) => {


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onTriggerSearch();
  }

    
  return (
    <>
      <div className='Menu-Form'>
        <form id='Form' onSubmit={ handleSubmit }>
        <input className='Menu-Form__search' id='Search' placeholder='Search movies or series' typeof='search' onChange={e => onSearchChange(e.target.value)}></input>
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