export const getSummarizeString = (str, maxLength) => {
    if (str.length <= maxLength) {
        return str;
    } else {
        return str.slice(0, maxLength) + " ...";
    }
}