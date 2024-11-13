import type { InavigationType } from '@ttype';
export const checkRole = (navigation: InavigationType[], role: string ) => {
    return navigation.filter((item: InavigationType ) => item.role?.includes(role));
};