import { StepType } from '../components/Wizard/types';
import customerConfig1 from './data/customerConfig1.json'
import customerData1 from './data/customerData1.json'

export const getCustomerSettings = (): Promise<object> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(customerConfig1);
    }, 1000);
  });
};

export const getCustomerData = (): Promise<StepType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(customerData1);
    }, 1000);
  });
};


