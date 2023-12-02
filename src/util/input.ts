export const removeHyphens = (value: string) => value.replace(/-/g, "");

export const formatPhoneNumber = (value: string) =>
    value
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{2,3})(\d{3,4})(\d{4,5})$/, `$1-$2-$3`)
        .slice(0, 13);
