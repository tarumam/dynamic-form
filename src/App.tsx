import { Header } from './components/Header';
import { Wizard } from './components/Wizard';
import { GlobalStyle } from './styles/global';
import Theme from './Theme';
import { BrowserRouter, } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getCustomerSettings, getCustomerData } from './api/getCustomerSettings';
import { StepType } from './components/Wizard/types';

export function App() {
  const [customerSettings, setCustomerSettings] = useState<object | undefined>(undefined);
  const [customerData, setCustomerData] = useState<StepType[]>([]);

  useEffect(() => {
    const fetchCustomerSettings = async () => {
      const data: object = await getCustomerSettings();
      setCustomerSettings(data);
    }

    const fetchCustomerData = async () => {
      const data: StepType[] = await getCustomerData();
      setCustomerData(data);
    }

    fetchCustomerSettings();
    fetchCustomerData();
  }, []);

  // TODO: Improve data fetch
  // TODO: Put a loading while the data is being fetched

  return (
    <>
      {customerSettings &&
        <Theme theme={customerSettings}>
          <GlobalStyle />
          <BrowserRouter>
            <Header path='header' />
            <Wizard path='wizard' steps={customerData} />
          </BrowserRouter>
        </Theme>
      }
    </>
  );
}