import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css'
import { selectFilter } from '../../redux/contacts/selectors';
import {  fetchContactsByQuery, setFilterValue } from '../../redux/filters/slice';

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
  

    const handleInputChange = (event) => {
        const filterWord = event.target.value;
        dispatch(setFilterValue(filterWord));
        dispatch(fetchContactsByQuery(filterWord))
    }

    return (
        <div className={css.searchWrapper}>
            <span>Find contacts by name or number</span>
            <br />
            <input type="text" name="searchName" placeholder='Rosie Simpson or xxx-xx-xx'
                className={css.searchField}
                value={filter}
                onChange={handleInputChange}
            />
         </div>  )
        
}

export default SearchBox

