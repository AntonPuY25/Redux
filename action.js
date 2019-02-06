export function Bookinfo(bookObj) {
    return {
        type: "SET_BOOK",
        payload: bookObj,
    }
}