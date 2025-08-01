import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { LargeSearchToggle } from 'fumadocs-ui/components/layout/search-toggle';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <DocsLayout tree={source.pageTree} {...baseOptions}
        searchToggle={{
            components: {
                lg: (
                    <div className="flex gap-1.5 max-md:hidden">
                        <LargeSearchToggle className="flex-1" />
                    </div>
                ),
            },
        }}>
        {children}
        </DocsLayout>
    );
}
