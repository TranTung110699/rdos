export const loadState = () => {
    const authUser = localStorage.getItem('authUser')
    if (!authUser) return {}
    return JSON.parse(authUser)
}
export const saveState = (state) => {
    const authUser = JSON.stringify(state)
    localStorage.setItem('authUser', authUser)
}
export const clearState = () => {
    localStorage.removeItem('authUser')
}

export const loadStateCustomer = () => {
    const authCustomer = localStorage.getItem('authCustomer')
    if (!authCustomer) return {}
    return JSON.parse(authCustomer)
}
export const saveStateCustomer = (state) => {
    const authCustomer = JSON.stringify(state)
    localStorage.setItem('authCustomer', authCustomer)
}
export const clearStateCustomer = () => {
    localStorage.removeItem('authCustomer')
}
