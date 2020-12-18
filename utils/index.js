const isNumber = (value) => {
    return !isNaN(value)
}
const errorHandler = (message) => {
    return {
        error: message
    }
}
const responseHandler = (value) => {
    return {
        value: value
    }
}
const sum = (a, b) => {

    return a + b;
}
const saveLocalStorageValue = (key, value) => {
    window.localStorage.setItem(key, value);
}
const saveLocalStorageObject = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}
const getLocalStorageValue = (key) => {
    let value = window.localStorage.get(key);
    return value ? value : null;
}
const getLocalStorageObject = (key) => {
    let value = window.localStorage.getItem(key)
    return value ? JSON.parse(value) : null;
}

module.exports = {
    isNumber,
    errorHandler,
    responseHandler,
    saveLocalStorageValue,
    saveLocalStorageObject,
    getLocalStorageValue,
    getLocalStorageObject
}