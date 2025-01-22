export const getStringedDate = (targetDate) => {
    // 날짜 -> YYYY-MM-DD
    let year = targetDate.getFullYear();
    let month = String(targetDate.getMonth() + 1).padStart(2, '0');
    let day = String(targetDate.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}