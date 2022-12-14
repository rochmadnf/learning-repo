import { Head, Link, usePage } from "@inertiajs/inertia-react";

export default function AppLayout({ title, children }) {
    const { users, auth } = usePage().props;
    return (
        <div className="flex min-h-screen">
            <Head>
                <title>{title}</title>
            </Head>
            <div className="w-1/3 border-r border-r-slate-300">
                <div className="fixed flex h-full w-1/3 flex-col space-y-2 px-6 py-4 text-right">
                    <div className="flex-1 overflow-y-auto">
                        {users.map((user) => (
                            <Link
                                key={user.id}
                                href={route("chats.show", user.username)}
                                className={`block cursor-pointer hover:text-gray-900 ${
                                    route().current("chats.show", user.username)
                                        ? "font-semibold text-gray-900"
                                        : "text-gray-600"
                                }`}
                            >
                                {user.name}
                            </Link>
                        ))}
                    </div>
                    <div className="space-y-4 rounded-xl bg-gray-100 p-4">
                        <div>{auth.user.name}</div>
                        <Link
                            href={route("logout")}
                            method="POST"
                            as="button"
                            className="rounded-xl border bg-white px-4 py-2 text-gray-900 shadow-sm transition duration-150 hover:bg-red-500 hover:text-white"
                        >
                            Log out
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-2/3">{children}</div>
        </div>
    );
}
