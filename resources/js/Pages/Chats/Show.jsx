import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/inertia-react";

export default function Show(props) {
    const { user } = props;
    return (
        <div className="flex h-screen flex-col justify-between">
            <Head>
                <title>{`Chat with ${user.name}`}</title>
            </Head>

            <div className="border-b border-b-slate-300 p-4 text-lg font-semibold capitalize">
                {user.name}
            </div>
            <div className="flex-1 overflow-y-auto p-4">
                <div className="italic text-gray-600">
                    No messages here yet...
                </div>
            </div>
            <div className="border-t border-t-slate-300">
                <input
                    type="text"
                    placeholder="Your messages..."
                    className="form-input w-full border-0 placeholder:font-light placeholder:italic focus:border-0 focus:outline-none focus:ring-0 focus:ring-blue-500"
                    id="messages"
                    name="messages"
                />
            </div>
        </div>
    );
}

Show.layout = (page) => <AppLayout children={page} />;
