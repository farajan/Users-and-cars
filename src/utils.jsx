export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatLongNumber = (number) => {
    return (number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};