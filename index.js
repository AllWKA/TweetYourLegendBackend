"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
console.log('banana');
const url = 'https://api.twitter.com/oauth2/token?grant_type=client_credentials';
axios_1.default.post(url, {}, {
    auth: {
        username: 'bryanjbj1@gmail.com',
        password: '1996jb6666'
    }
})
    .then(res => {
    console.log(res.data);
})
    .catch(e => {
    console.log(e.message);
});
// auth: {
//     username: '5cVNfElXwznnVm2UMrVmqXAQ9',
//         password: 'PlB5qwFrAzrjbzbwH6AZ76wieqNuOEuMeEFptLzYtr1ZgbbnWr'
// }
