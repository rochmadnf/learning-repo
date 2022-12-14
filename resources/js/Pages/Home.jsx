import AppLayout from "@/Layouts/AppLayout";

export default function Home() {
    return <div className="px-6 py-4">Start chat now...</div>;
}

Home.layout = (page) => <AppLayout children={page} title="Chatty" />;
