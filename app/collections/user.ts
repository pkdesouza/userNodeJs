import { model } from 'mongoose';
import { UserSchema } from '../models/UserSchema';

UserSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) return next();
});

UserSchema.pre('findOneAndUpdate', function (next) {
  const user = this;

});
export default model('user', UserSchema);
