const crypto = require('crypto');

export default class Crypto {
    public static encrypt(value: string): string {
        return crypto.createHash('md5').update(value).digest('hex')
    }
}