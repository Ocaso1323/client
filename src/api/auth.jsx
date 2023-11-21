import { ENV } from "../utils"

export class Auth {
    baseapi = ENV.BASE_API;


    async register(data) {
        try {
            const url = `${this.baseapi}/${ENV.API_ROUTES.REGISTER}`

            const params = {
                method: "POST",
                Headers: {
                    "content-type": "application/json"
                },

                body: JSON.stringify({
                    firstname: data.firstname,
                    lastname: data.lastname,
                    email: data.email,
                    password: data.password,
                })
            }

            const response = await fetch(url, params)
            const result = await response.json()
            if (response !== 200) throw result
            return result
            
        } catch (error) {
            throw error
        }
    }
}