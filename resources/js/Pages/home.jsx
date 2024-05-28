import { AppLayout } from '@/layouts/app-layout';
import { Container } from '@/components/container';
import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <Container>Home Page</Container>
        </>
    );
}

Home.layout = (page) => <AppLayout children={page} />;
