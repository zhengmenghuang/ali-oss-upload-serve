const env = process.env;
module.exports = {
  AccessKeyId: '',
  AccessKeySecret: '',
  RoleArn: '',
  // 建议 Token 失效时间为 1 小时
  TokenExpireTime: '3600',
  PolicyFile: 'policy/all_policy.txt'
};
