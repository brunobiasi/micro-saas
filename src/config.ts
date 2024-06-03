export const config = {
    stripe: {
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
        secretKey: process.env.STRIPE_SECRET_KEY,
        webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
        plans: {
            free: {
                priceId: 'price_1PLEzhLxF4YzRgTPPN4gW1bK',
                quota: {
                    TASKS: 5,
                },
            },
            pro: {
                priceId: 'price_1PLF0cLxF4YzRgTPWAzIK30R',
                quota: {
                    TASKS: 100,
                },
            },
        },
    },
}