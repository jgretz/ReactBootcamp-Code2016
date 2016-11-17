import crypto from 'crypto';

const pubkey = '4b3e8f04c699333aa0582ba2ddf82937';
const privkey = '046da1f6d0df9a39c84123b3445774736bb18475';

const timestamp = () => parseInt(Date.now() / 1000, 10);

const createHash = (ts) => {
  const preHash = ts + privkey + pubkey;
  const hash = crypto.createHash('md5').update(preHash).digest('hex');

  return hash;
};

export default () => {
  const ts = timestamp();

  return {
    apikey: pubkey,
    ts,
    hash: createHash(ts),
  };
};
