import { Space, Layout, Divider, Typography } from 'antd';
import logo from '@/style/images/nexora-logo.png'; // Updated path
import useLanguage from '@/locale/useLanguage';
import { useSelector } from 'react-redux';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function SideContent() {
  const translate = useLanguage();

  return (
    <Content
      style={{
        padding: '150px 30px 30px',
        width: '100%',
        maxWidth: '450px',
        margin: '0 auto',
      }}
      className="sideContent"
    >
      <div style={{ width: '100%', textAlign: 'center', overflow: 'hidden' }}>
        <img
          src={logo}
          alt="Nexora Admin"
          style={{ 
            margin: '0 auto 40px', 
            display: 'block',
            maxHeight: '120px',
            width: 'auto',
            transform: 'scale(1.8)', // Zooms in to remove square borders
            mixBlendMode: 'multiply', // Blends white background
            filter: 'brightness(1.05)'
          }}
        />
        <div className="space40"></div>
        <Title level={3}>{translate('Welcome to Nexora Admin')}</Title>
        <Text>{translate('Management Made Simple')}</Text>
      </div>
    </Content>
  );
}
