import { User, Message } from '.';

export interface UserMessages {
    user: User,
    messages: Message[]
}