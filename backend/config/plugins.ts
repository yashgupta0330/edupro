
export default ({ env }) => ({
    upload: {
        config: {
            sizeLimit: 10000000,
            provider: 'local',
            providerOptions: {
            },
        },
    },
    email: {
        config: {
            provider: '@strapi/provider-email-nodemailer',
            providerOptions: {
                host: env('SMTP_HOST', 'anarish.com'),
                port: env.int('SMTP_PORT', 587),
                secure: false,
                requireTLS: true,
                auth: {
                    user: env('SMTP_USER', 'mail@anarish.com'),
                    pass: env('SMTP_PASS', ''),
                },
            },
            settings: {
                defaultFrom: env('SMTP_FROM', env('SMTP_USER')),
                defaultFromName: env('SMTP_FROM_NAME', 'ServitiumCRM'),
                defaultReplyTo: env('SMTP_FROM', env('SMTP_USER')),
            },
        },
    },
});