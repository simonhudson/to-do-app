import xss from 'xss';

export const sanitizeString = (value: string) => xss(value);
