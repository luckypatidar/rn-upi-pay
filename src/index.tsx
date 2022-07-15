import { NativeModules, Platform } from 'react-native';
import { UPIPayment,UPITransactionProps } from './UpiPayment';

const LINKING_ERROR =
  `The package 'rn-upi-pay' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const RnUpiPay = NativeModules.RnUpiPay
  ? NativeModules.RnUpiPay
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export const initiateTransaction = (paymentData: UPITransactionProps) => {
  return UPIPayment(paymentData, RnUpiPay);
};
