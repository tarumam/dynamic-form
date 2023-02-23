import { StepType } from '../components/Wizard/types'
import customerConfig1 from './data/customerConfig1.json'
import customerConfig2 from './data/customerConfig2.json'

import customerData1 from './data/customerData1.json'
import customerData2 from './data/customerData2.json'

const rndInt = Math.floor(Math.random() * 2) + 1

const data: any = {
  'customerConfig1': customerConfig1,
  'customerConfig2': customerConfig2,
  'customerData1': customerData1,
  'customerData2': customerData2,
}


export const getCustomerSettings = (): Promise<object> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data[`customerConfig${rndInt}`]);
    }, 1000);
  });
};

export const getCustomerData = (): Promise<Array<StepType>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data[`customerData${rndInt}`]);
    }, 1000);
  });
};


