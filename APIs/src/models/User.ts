import { ObjectId }  from "mongodb";
import CartItem from './CartItem';

export default interface User {
    _id?: ObjectId;
    displayName: string;
    protoURL: string;
    darkTheme: string
}