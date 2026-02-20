import React from 'react';
import { Button, Result } from 'antd';
import useLanguage from '@/locale/useLanguage';

export default function About() {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'Nexora Admin'}
      subTitle={translate('Official Nexora Admin ERP & CRM Solutions')}
      extra={
        <>
          <p>
            Website : <a href="https://www.nexoraapp.com" target="_blank" rel="noreferrer">www.nexoraapp.com</a>{' '}
          </p>
          <p>
            Documentation :{' '}
            <a href="https://www.nexoraapp.com/docs" target="_blank" rel="noreferrer">
              https://www.nexoraapp.com/docs
            </a>
          </p>
          <Button
            type="primary"
            onClick={() => {
              window.open(`https://www.nexoraapp.com/support/`);
            }}
          >
            {translate('Contact Support')}
          </Button>
        </>
      }
    />
  );
}
