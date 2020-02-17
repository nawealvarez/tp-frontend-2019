import { User } from '.';

export interface Message {
    _id: string
    content: User,
    emiter: User,
    createdAt: Date,
    updatedAt: Date
}