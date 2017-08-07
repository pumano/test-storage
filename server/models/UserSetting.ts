import * as mongoose from 'mongoose';
import * as crypto from 'crypto';

const UserSettingSchema = new mongoose.Schema({
    _id: {
        type: String, unique: true,
        default: function () {
            return crypto.randomBytes(16).toString('hex');
        }
    },
    settings: { type: Object, required: true },
    created: { type: Date, required: true, default: Date.now },
    updated: { type: Date, required: true, default: Date.now },
    createdBy: String,
    updatedBy: String
});

const UserSetting = mongoose.model('UserSetting', UserSettingSchema);
export { UserSetting };
