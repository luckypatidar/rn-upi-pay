# rn-upi-pay
A react-native library for UPI payments
## Installation

```sh
npm install rn-upi-pay 
or yarn add rn-upi-pay
```

## Usage

```js
import { initiateTransaction } from "rn-upi-pay";

// ...

initiateTransaction({
      upi: 'upi_id',  // Required
      transactionId: 'transaction_id',  // Required
      currency: 'INR',   //(Required)
      merchantCategoryCode: 'Merchant Category Code',  // (Required)
      payeeName: 'Name of the Payee', // Required 
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

Key | Value | Description  
--- | --- | ---
paymentStatus | -1 or 1 or 0 | ```-1``` - DATA MISSING OR INVALID, ```1``` - SUCCESS, ```0``` - FAILURE
txnId | String  | Transaction ID return from the Payment App ( for Backend Process ) only return when the ```paymentStatus``` is ```1``` or ```0```
txnRef |String | Transaction Reference ID return from the Payment App ( only return when the ```paymentStatus``` is ```1``` or ```0``` )
missingData | [Missing Data](#missing-data) | Data which is missing or Invalid ( only return when the ```paymentStatus``` is ```-1``` )
responseCode | String | Code return from the Payment App ( only return when the ```paymentStatus``` is ```1``` or ```0``` )
message | String  | Message about Success or Failure or Invalid Data

#### `Missing Data`

`AMOUNT`, `UPI_ID`, `TRANSACTION_ID`, `CURRENCY`, `MERCHANT_CATEGORY_CODE`, `PAYEE_NAME`

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
