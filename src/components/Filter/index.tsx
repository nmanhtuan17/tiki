import {useFilter} from "../../hooks/useFilter.ts";
import FilterItem from "./FilterItem";

const FilterSection = () => {
  const {sections} = useFilter();

  const onChange = (checkValue: any) => {
    console.log(checkValue)
  }
  return (
    <div className='gap-3 bg-white p-2 px-4 rounded'>
      {sections.map(item => <FilterItem section={item} onChange={onChange} />)}
    </div>
  )
}
export default FilterSection
