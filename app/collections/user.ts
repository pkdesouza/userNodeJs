import { model } from 'mongoose';
import { UserSchema } from '../models/userSchema';

UserSchema.pre('save', function (next) {
  return next();
});

UserSchema.pre('findOneAndUpdate', function (next) {
  return next();
});
export default model('user', UserSchema);
