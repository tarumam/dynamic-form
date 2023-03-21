import { Header } from './components/Header';
import { Wizard } from './components/Wizard';
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
      const data: Array<StepType> = await getCustomerData();
      setCustomerData(data);
    }

    fetchCustomerSettings();
    fetchCustomerData();
  }, []);

  if (customerSettings) {
    return (
      <>
        {customerSettings &&
          <Theme theme={customerSettings}>
            <BrowserRouter>
              <Header path='header' />
              <Wizard path='wizard' steps={customerData} />
            </BrowserRouter>
          </Theme>
        }
      </>
    );
  }
  return <div>Loading...</div>

}