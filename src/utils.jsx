export const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1)

export const formatLongNumber = (number) =>
    (number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')

export const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export const validatePhoneNumber = (phone) => {
    const re = /^[\+][0-9]{3}[-\s\.][0-9]{3}[-\s\.][0-9]{3}[-\s\.][0-9]{3}$/im;
    return re.test(phone);
}

export const getSignInBody = (username, password) => 
    `username=${username}&password=${password}&remember-me=on&submit=Login`

export const formatDate = (date) => {
    const dt = new Date(date);
    return `${dt.getDay()}.${dt.getMonth()}.${dt.getFullYear()}`;
}