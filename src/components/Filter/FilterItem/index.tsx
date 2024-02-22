import {Checkbox, Rate} from "antd";
import React from "react";

interface IFilterItemProps {
  section: any;
  onChange?: (val: any) => void;
  onClick?: (val : any) => void;
}

const FilterItem: React.FC<IFilterItemProps> = ({section, onChange, onClick}) => {


  const renderItem = (item : any) => {
    return <div onClick={() => onClick(item)} key={item.id} style={{cursor: 'pointer'}}>
      <span>{item?.text}</span>
    </div>
  }
  return (
    <div className='row gap-2 mb-4 '>
      <span className='fw-bold'>{section.title}</span>
      {section.id === 1 && section.data.map((item: any) => renderItem(item))}
      {section.id === 2 && (
        <Checkbox.Group style={{ width: '100%' }} options={section.data} onChange={onChange} />
      )}
      {section.id === 3 && (
        section.data.map((item : number) => <div key={item} style={{cursor: 'pointer'}}>
          <Rate value={item} style={{fontSize: 8}} disabled />
          <span className='ms-2'>{`từ ${item} sao`}</span>
        </div>)

      )}
    </div>
  )
}

export default FilterItem
