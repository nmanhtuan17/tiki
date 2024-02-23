
export const useFilterSection = () => {

  const sections = [
    {
      id: 1,
      title: 'Danh mục sản phẩm',
      data: [
        {
          id: 320,
          text: 'English Books'
        },
        {
          id: 316,
          text: 'Sách tiếng Việt'
        },
        {
          id: 9,
          text: 'Truyện đọc tiếng anh'
        },
        {
          id: 871,
          text: 'Sách tư duy - kĩ năng sống'
        },
      ]
    },
    {
      id: 2,
      title: 'Nhà cung cấp',
      data: [
        {
          label: 'Nhà sách Fahasa',
          value: 53660
        },
        {
          label: 'Bamboo Books',
          value: 281062
        },
        {
          label: 'Time Books',
          value: 10684
        },
        {
          label: 'Nhà Sách Trẻ Online',
          value: 1
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
