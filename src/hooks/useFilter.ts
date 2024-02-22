
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
