import {useState} from "react";

export const useFilter = () => {
  const [type, setType] = useState();
  const [suplier, setSuplier] = useState();
  const [rate, setRate] = useState();

  const sections = [
    {
      id: 1,
      title: 'Danh mục sản phẩm',
      data: [
        {
          id: 1,
          text: 'English Books'
        },
        {
          id: 2,
          text: 'Sách tiếng Việt'
        },
        {
          id: 3,
          text: 'Văn phòng phẩm'
        },
        {
          id: 4,
          text: 'Quà lưu niệm'
        },
      ]
    },
    {
      id: 2,
      title: 'Nhà cung cấp',
      data: [
        {
          label: 'Nhà sách Fahasa',
          value: 'Nhà sách Fahasa'
        },
        {
          label: 'Bamboo Books',
          value: 'Bamboo Books'
        },
        {
          label: 'Time Books',
          value: 'Time Books'
        },
        {
          label: 'Nhà Sách Trẻ Online',
          value: 'Nhà Sách Trẻ Online'
        },
      ]
    },
    {
      id: 3,
      title: 'Đánh giá',
      data: [5, 4, 3]
    }
  ]
  return {sections}
}
