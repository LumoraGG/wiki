import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { baseUrl, createMetadata } from '@/lib/metadata';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
    subsets: ['latin'],
});

export const metadata = createMetadata({
    title: {
        template: '%s | Lumora Wiki',
        default: 'Lumora Wiki',
    },
    description: 'Lumora Wiki - here you can find all sorts of useful information about how to setup & utilize our products.',
    metadataBase: baseUrl,
});

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={inter.className} suppressHydrationWarning>
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" href="/favicon/favicon.ico" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />

                <meta property="og:site_name" content="Lumora Wiki" />
                <meta property="og:title" content="Lumora Wiki" />
                <meta property="og:locale" content="en" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Lumora Wiki - here you can find all sorts of useful information about how to setup & utilize our products." />
                <meta property="og:url" content="https://wiki.lumora.gg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="lumora" />
                <meta name="twitter:title" content="Lumora Wiki" />
                <meta name="twitter:image:alt" content="Lumora Wiki" />
                <meta name="twitter:description" content="Lumora Wiki - here you can find all sorts of useful information about how to setup & utilize our products." />
                <meta name="twitter:creator" content="lumora" />
            </head>
            <body className="flex flex-col min-h-screen">
                <RootProvider>{children}</RootProvider>

                <script defer data-domain="wiki.lumora.gg" src="https://plausible.lumora.gg/js/script.hash.outbound-links.js"></script>

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.plausible = window.plausible || function() {
                                (window.plausible.q = window.plausible.q || []).push(arguments)
                            }
                        `,
                    }}
                />
            </body>
        </html>
    );
}
