
export function getJsonObject (str: string) {
    let content;
    try {
        content = JSON.parse(str);
    }
    catch (err) {
        console.error(err);
    }
    return content;
}

export function getFloatString (value: number) {
    if (typeof value !== 'number') {
        return value;
    }

    let str = value + '';
    if (!str.includes('.')) {
        str += '.';
    }
    return str;
}