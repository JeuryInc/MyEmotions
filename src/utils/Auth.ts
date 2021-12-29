export const isLogged = () => {
    const expirationTime = localStorage.getItem('tokenExpirationTime');
    if(expirationTime == null){
        return false
    }
    return new Date().getTime() / 1000 < parseInt(expirationTime, 10)
}

export const signOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('tokenExpirationTime')
    localStorage.removeItem('id')
}
