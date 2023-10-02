
interface Props {
  handleChange: (e: string) => void
}

const SeachBar: React.FC<Props> = () => {

  const handleChange = (event) => {
    const valueText = event.value
  }


    
  return (
    <>
      <div className='Menu-Form'>
        <input className='Menu-Form__search' id='Search' placeholder='Search movies or series' typeof='search' onChange={handleChange}></input>
        <button className='Search-Button' type='submit'><img className='Search-Icon' src="src/assets/icon_search.svg"/></button>
      </div>
    </>
  )
}

export default SeachBar




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