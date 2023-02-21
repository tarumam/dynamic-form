import { StepType } from '../components/Wizard/types';

import customerConfig1 from './data/customerConfig1.json'
import customerConfig2 from './data/customerConfig2.json'

import customerData1 from './data/customerData1.json'
import customerData2 from './data/customerData2.json'

export const getCustomerSettings = (): Promise<object> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(customerConfig2);
    }, 1000);
  });
};

export const getCustomerData = (): Promise<StepType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(customerData2);
    }, 1000);
  });
};


