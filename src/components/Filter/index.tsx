import {useFilterSection} from "../../hooks/useFilter.ts";
import FilterItem from "./FilterItem";

interface Props {
  setSeller: any;
  setCate: any;
  setRate: any;
  cate: number;
  rate: number;
}

const FilterSection: React.FC<Props> = ({setSeller, setRate, setCate, cate, rate}) => {
  const {sections} = useFilterSection();
  const onChange = (checkValue: any) => {
    setSeller(checkValue);
  }
  const handleFilterCategories = (item) => {
    if (item.id === cate) {
      setCate(null);
      return;
    }
    setCate(item.id)
  }

  const handleFilterRate = (_rate) => {
    if (rate === _rate) {
      setRate(null)
      return;
    }
    setRate(_rate)
  }
  return (
    <div className='gap-3 bg-white p-2 px-4 rounded mb-3'>
      {sections.map(item =>
        <FilterItem
          key={item.id}
          section={item}
          onChange={onChange}
          onClick={handleFilterCategories}
          onClickRate={handleFilterRate}
          cate={cate}
          rate={rate}
        />)}
    </div>
  )
}
export default FilterSection
