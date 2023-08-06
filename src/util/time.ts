export function getCurrentDateTime(format?: "date" | "time" | "dateTime") {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;

    if (format === "date") return `${year}-${month}-${day}`;
    if (format === "time") return `${hours}:${minutes}`;
    return formattedDateTime;
}
