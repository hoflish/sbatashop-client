import fetch from 'cross-fetch';
import RestClient from './restClient';

export default class WebStoreClient extends RestClient {
	constructor(options) {
		super({ baseUrl: options.baseUrl, token: options.token });
	}

	static authorize = (email, adminUrl) => {
		const config = {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, admin_url: adminUrl })
		};

		return fetch(`${this.baseUrl}/account/authorize`, config).then(
			RestClient.returnStatusAndJson
		);
	};
}
