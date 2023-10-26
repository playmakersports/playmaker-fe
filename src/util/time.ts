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

export const getDateInterval = (target: string, target2?: string) => {
    const today = target2 ? new Date(target2) : new Date();
    const targetDate = new Date(target.split(" ")[0]);

    // 입력된 날짜와 현재 날짜 사이의 차이 계산
    const timeDiff = targetDate.getTime() - today.getTime();
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return diffDays;
};

export const getDateDiffMessage = (diffDays: number, targetDate?: Date) => {
    const target = targetDate ?? new Date();

    if (diffDays === 0) {
        return `오늘`;
    } else if (diffDays === 1) {
        return `내일 `;
    } else if (diffDays === 2) {
        return `2일 후`;
    } else if (diffDays === 3) {
        return `3일 후`;
    } else if (diffDays >= 4) {
        const month = target.getMonth() + 1;
        const day = target.getDate();
        return `${month}월 ${day}일 `;
    } else {
        return null;
    }
};
