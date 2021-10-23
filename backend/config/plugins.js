module.exports = ({ env }) => ({
  email: {
    provider: 'amazon-ses',
    providerOptions: {
      key: env('AWS_ACCESS_KEY_ID'),
      secret: env('AWS_ACCESS_SECRET'),
      amazon: env('AWS_REGION'),
    },
    settings: {
      defaultFrom: 'eneotujoe@gmail.com',
      defaultReplyTo: 'eneotujoe@gmail.com',
      testAddress: 'joe90eneotu@gmail.com',
    },
  },

  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: env('AWS_REGION'),
      params: {
        Bucket: env('AWS_BUCKET_NAME'),
      },
    },
  },
});