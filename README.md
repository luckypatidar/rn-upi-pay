# rn-upi-pay
A react-native library for UPI payments for android device
## Installation

```sh
npm install rn-upi-pay 
or yarn add rn-upi-pay
```
##Demo

![](https://media.giphy.com/media/Ei4GF0b0tpkxLQEhwR/giphy.gif)
## Usage

```js
import { initiateTransaction } from "rn-upi-pay";


initiateTransaction({
      payeeName: 'Name of the Payee', // Required 
      upi: 'upi_id',  // Required
      transactionId: 'transaction_id',  // Required
      currency: 'INR',   //(Required)
      merchantCategoryCode: 'Merchant Category Code',  // (Required)      
      amount: '1',  // Required
      note: 'test', // (Optional)
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
```

### Response Props

```js

- `paymentStatus` - Return -1(Data Missing or Invalid), 1(Success) or 0(Failure).
- `txnId` - It returns from the payment app when the payment status is 1 or 0.
- `txnRef` - It returns from the payment app when the payment status is 1 or 0.
- `missingData` - Data is either missing or invalid(-1).
- `responseCode` - 1(for success), 0(for failure) or -1(Invalid Data).
- `message` - About the success or failure.
```


### Missing Data

```js
`Amount`, `UPI id`, `transaction id`, `Merchant code`, `Currency`, `Payee name`
```

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

## Contribution Guide

