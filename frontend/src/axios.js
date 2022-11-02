
const makeConfig= (method)=>{
    const token= JSON.parse(localStorage.getItem("auth")).lunaToken
    const headers = new Headers({
        "Authorization": `Bearer ${token}`,
        'content-type': 'application/json'
    })
    const config = {
        method: method,
        headers: headers
    }
    return config
}
const makeConfigSendReview= (method,content)=>{
    const token= JSON.parse(localStorage.getItem("auth")).lunaToken
    const headers = new Headers({
        "Authorization": `Bearer ${token}`,
    })
    const config = {
        method: method,
        headers: headers,
        body:content
    }
    return config
}

const makeConfigNoAuth= (method)=>{
    const token= JSON.parse(localStorage.getItem("auth")).lunaToken
    const headers = new Headers({
        "Authorization": `Bearer ${token}`,
        'content-type': 'application/json'
    })
    const config = {
        method: method,
        headers: headers
    }
    return config
}
export {makeConfigNoAuth,makeConfig,makeConfigSendReview}