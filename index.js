let axios = require('axios');
fast2sms = {
    init({ API_KEY, ROUTE, SENDER_ID }) {
        this.API_KEY = API_KEY; // Mandatory
        this.ROUTE = ROUTE;
        this.SENDER_ID = SENDER_ID;
    },
    async send(config) {
        if (this.API_KEY == null || this.API_KEY == '') {
            throw 'Blank Fast2SMS API Key';
        }
        this.instance = axios.create();
        this.instance.defaults.headers.common['Authorization'] = this.API_KEY;

        const data = {
            "sender_id": "FSTSMS",
            "message": config.message,
            "language": "english",
            "route": "qt",
            "numbers": config.to,
            "flash": "1",
            "variables": "{#AA#}",
            "variables_values": "1234"
        };
        try {
            let res = await this.instance.post('https://www.fast2sms.com/dev/bulk', data)
            return res.data;
        }
        catch (error) {
            var err = null;
            if (error.response) {
                err = error.response.data.message;
                if (err === 'Invalid Authentication') {
                    throw 'Invalid Fast2SMS API Key';
                }
                throw err;
            }
            throw error;
        }
    }
}
module.exports = fast2sms;
