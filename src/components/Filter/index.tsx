import {useFilterSection} from "../../hooks/useFilter.ts";
import FilterItem from "./FilterItem";
import {useAppDispatch, useAppSelector} from "../../store";
import {filterBooks} from "../../store/actions/app.action.ts";

const FilterSection = () => {
  const {sections} = useFilterSection();
  const {books} = useAppSelector(state => state.app);
  const dispatch = useAppDispatch();
  const onChange = (checkValue: any) => {
    console.log(checkValue)

  }
  const handleFilterCategories = (item) => {
    console.log(item)
    dispatch(filterBooks(item.id))
  }
  return (
    <div className='gap-3 bg-white p-2 px-4 rounded'>
      {sections.map(item => <FilterItem key={item.id} section={item} onChange={onChange} onClick={handleFilterCategories}/>)}
    </div>
  )
}
export default FilterSection
