import {Checkbox, Rate} from "antd";
import React from "react";

interface IFilterItemProps {
  section: any;
  onChange?: (val: any) => void;
  onClick?: (val: any) => void;
  onClickRate?: (val: number) => void;
  cate: number;
  rate: number;
}

const FilterItem: React.FC<IFilterItemProps> = ({section, onChange, onClick, onClickRate, cate, rate}) => {


  const renderItem = (item: any) => {
    return <div className={cate === item.id ? 'fw-bold' : ''} onClick={() => onClick(item)} key={item.id}
                style={{cursor: 'pointer'}}>
      <span>{item?.text}</span>
    </div>
  }
  return (
    <div className='row gap-2 mb-4 '>
      <span className='fw-bold'>{section.title}</span>
      {section.id === 1 && section.data.map((item: any) => renderItem(item))}
      {section.id === 2 && (
        <div>
          <Checkbox.Group className='row' style={{width: '100%'}} onChange={onChange}>
              {section.data.map((item, index) => <div className='col-lg-10 flex-grow-1'>
                <Checkbox key={index} value={item.value}>{item.label}</Checkbox>
              </div>)}
          </Checkbox.Group>

        </div>
      )}
      {section.id === 3 && (
        section.data.map((item: number) => <div className={rate === item ? 'fw-bold' : ''}
                                                onClick={() => onClickRate(item)} key={item}
                                                style={{cursor: 'pointer'}}>
          <Rate value={item} style={{fontSize: rate === item ? 12 : 8}} disabled/>
          <span className='ms-2'>{`từ ${item} sao`}</span>
        </div>)

      )}
    </div>
  )
}

export default FilterItem
