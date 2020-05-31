import { model, Document, HookNextFunction } from 'mongoose';
import { UserSchema } from '../models/userSchema';
import bcrypt from 'bcrypt';

UserSchema.pre('save', function (next: HookNextFunction) {
  const user: Document | any = this;

  if (!user.isModified('password')) return next();

  bcrypt.hash(user.password, 10, (err, encrypted) => {
    user.password = encrypted;
    return next();
  })
});

UserSchema.pre('findOneAndUpdate', function (next: HookNextFunction) {
  const user: Document | any = this;
  if (!user._update.password) return next()

  bcrypt.hash(user._update.password, 10, (err, encrypted) => {
    user._update.password = encrypted;
    return next();
  })
});
export default model('user', UserSchema);
