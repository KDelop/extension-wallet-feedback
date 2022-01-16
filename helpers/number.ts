export function numberMinimize(num: number) {
    if (num > 1000000000) return Math.round(num / 1000000000) + "B";
    if (num > 1000000) return Math.round(num / 1000000) + "M";
    if (num > 1000) return Math.round(num / 1000) + "K";
    return num
}