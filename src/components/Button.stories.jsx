import { Button } from './Button';

// 1. CẤU HÌNH TỔNG QUAN (Giống như tạo file cho Component trong Figma)
export default {
  title: 'UI Components/Button', // Đường dẫn thư mục trên menu Storybook
  component: Button,
  tags: ['autodocs'], // Tự động sinh ra trang Document (Tài liệu)

  // Thiết lập Control Panel (Giống bảng Properties bên phải của Figma)
  argTypes: {
    variant: {
      control: 'select', // Tạo dropdown chọn
      options: ['primary', 'secondary']
    },
    size: {
      control: 'radio',  // Tạo nút radio bấm
      options: ['small', 'large', '']
    },
    label: {
      control: 'text' // Ô nhập chữ
    }
  },
};

// 2. TẠO CÁC TEST CASE (Giống như bạn lôi từng Variant ra trình bày)
export const Primary = {
  args: {
    variant: 'primary',
    label: 'Label Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    label: 'Label Button',
  },
};