export const isNullOfUndefined = (target) => {
    return target === null || target === undefined;
};
export const toBase64 = file => new Promise((resolve:any, reject:any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});