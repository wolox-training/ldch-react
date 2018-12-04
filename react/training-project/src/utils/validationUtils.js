export const required = value => (value ? undefined : 'Value is required');
export const minLength = value => (value.length < 8 ? 'Value most be at least 8 characteres' : undefined);
