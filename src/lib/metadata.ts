import type { Metadata } from 'next/types';

export function createMetadata(override: Metadata): Metadata {
    return {
        ...override,
        openGraph: {
        title: override.title ?? undefined,
        description: override.description ?? undefined,
        url: 'https://docs.prism-host.com',
        images: '/banner.png',
        siteName: 'PrismHost',
        ...override.openGraph,
        },
        twitter: {
        card: 'summary_large_image',
        creator: '@money_is_shark',
        title: override.title ?? undefined,
        description: override.description ?? undefined,
        images: '/banner.png',
        ...override.twitter,
        },
    };
}

export const baseUrl =
    process.env.NODE_ENV === 'development' || 'https://docs.prism-host.com'
        ? new URL('http://localhost:3000')
        : new URL(`https://docs.prism-host.com`);