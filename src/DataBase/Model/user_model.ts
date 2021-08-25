import { Document, Schema, model } from 'mongoose'

export interface IUser extends Document {
  name: string;
  email: string;
}

const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true }
})

export const User = model<IUser>('user', schema)
