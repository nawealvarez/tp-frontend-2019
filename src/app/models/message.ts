import { User } from '.';

export interface Message {
    _id: string
    content: string,
    emiter: User,
    createdAt: Date,
    updatedAt: Date
}