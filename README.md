
# NodeJS library for sending SMS in India using Fast2SMS

## Quick start
> Make sure you have **Node** version >= 8.0

```
$ npm i -S fast2sms
```

```
var fast2sms = require('fast2sms');
var options = {API_KEY:YOUR_API_KEY};
fast2sms.init(options)
fast2sms.send({ message: 'The SMS content e.g. "This is a message from Fast2SMS"', to: TARGET_PHONE_NUMBER }).then(function (data) {
    console.log('data................', data);
}).catch(function (error) {
    console.log('err.................', error);
})
```


# Details

```
YOUR_API_KEY = FIND THIS API KEY INSIDE https://www.fast2sms.com/dashboard/dev-api 
TARGET_PHONE_NUMBER = 'Target numbers separated by comma, e.g. 8962239013,7773854335'
```

# Optional settings

You can also add these to options variable
```
sender_id - A custom name for SMS sender
language  - english / unicode (Unicode supports other languages such as Hindi) 
route     - qt: Quick transactional
            q: Promotional  
            t: Transactional
```