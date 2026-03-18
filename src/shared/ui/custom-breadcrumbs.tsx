import { Breadcrumbs, Anchor } from '@mantine/core';

const items = [
    { title: '', href: '' },
    { title: '', href: '' },
    { title: '', href: '' },
].map((item, index) => (
    <Anchor href={item.href} key={index}>
        {item.title}
    </Anchor>
));

export const CustomBreadcrumbs = () => <Breadcrumbs>{items}</Breadcrumbs>;