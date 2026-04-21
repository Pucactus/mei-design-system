// Import Component Button từ thư viện bạn vừa tạo
import { Button } from './components/Button';

function App() {
  return (
    <div style={{ padding: '50px', display: 'flex', gap: '16px' }}>

      {/* Đây giống như việc bạn kéo 2 Instance ra và set Properties */}
      <Button variant="primary" label="Đăng nhập" />

      <Button variant="secondary" label="Đăng ký" />

    </div>
  );
}

export default App;