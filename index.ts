import axios from 'axios'

console.log('banana')

const url = 'https://api.twitter.com/oauth2/token?grant_type=client_credentials'

axios.post(url,{},
    {
        auth: {
            username: '',
            password: ''
        }
    }
)
    .then(res => {
        console.log(res.data)
    })
    .catch(e => {
        console.log(e.message)
    })
