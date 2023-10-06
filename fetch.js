// google image
// All image/data are downloaded from a server (backend)

// through protocols: http(s, for security), ftp... shh/http clone...
// refer to: https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
// https is a protocol to fetch resources (html, doc/img. video/audio)

// how? API: --> application program interface
// 1. fetch(es 2015): async func, return a promise in response to a request
// 2. axios: 3rd party ; axios npm; refer to https://www.npmjs.com/package/axios
// 3. XMLHttp Request API (core of AJAX) ---> old way

const res = fetch('https://jsonplaceholder.typicode.com/users')
console.log(res) //node version important, nvm, browser can use

res.then(initialRes => initialRes.json()) //if txt format, txt()
    .then(result => console.log('final result', result))
// the Promise returned by .json() or .text() is resolved with the actual parsed data, not another Promise.
// every then will give a promise
// 最后一个 then 的返回值默认是 undefined，因为你没有明确返回任何东西。

//JSON: javascript object notation; [obj] nested
const arr =[
    {'class': 1, 'students': ['bb', 'jojo']},
    {'class': 2, 'students': ['bb', 'jojo']},
]



