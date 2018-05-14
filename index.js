let axios = require('axios');
fast2sms = {
    init({ API_KEY, route, sender_id, language, variable, variable_value }) {
        this.API_KEY = API_KEY; // Mandatory
        this.route = route || 'qt';
        this.sender_id = sender_id || "FSTSMS";
        this.language = language || "english";
        this.variable = variable || "{#AA#}";
        this.variable_value = variable_value || "12345";
    },
    async send(config) {
        if (this.API_KEY == null || this.API_KEY == '') {
            throw 'Blank Fast2SMS API Key';
        }
        this.instance = axios.create();
        this.instance.defaults.headers.common['Authorization'] = this.API_KEY;

        const data = {
            "sender_id": this.sender_id,
            "message": config.message,
            "language": this.language,
            "route": this.route,
            "numbers": config.to,
            "flash": "1",
            "variables": this.variable,
            "variables_values": this.variable_value
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
