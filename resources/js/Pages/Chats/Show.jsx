import AppLayout from "@/Layouts/AppLayout";
import { Head, useForm, usePage } from "@inertiajs/inertia-react";

export default function Show(props) {
    const { auth } = usePage().props;
    const { user, chats } = props;

    const { data, setData, reset, errors, post } = useForm({ messages: "" });

    const submitHandler = (e) => {
        e.preventDefault();
        post(route("chats.store", user.username), {
            onSuccess: () => {
                reset("messages");
            },
        });
    };

    return (
        <div className="flex h-screen flex-col justify-between">
            <Head>
                <title>{`Chat with ${user.name}`}</title>
            </Head>

            <div className="border-b border-b-slate-300 p-4 text-lg font-semibold capitalize">
                {user.name}
            </div>
            <div className="flex-1 overflow-y-auto p-4">
                {chats.length ? (
                    <div className="flex flex-col space-y-2">
                        {chats.map((chat) => (
                            <div
                                key={chat.id}
                                className={`w-fit max-w-[80%] rounded-full px-5 py-2 ${
                                    auth.user.id === chat.sender_id
                                        ? "self-end bg-green-500 text-white"
                                        : "bg-slate-200 text-gray-900"
                                }`}
                            >
                                <p>{chat.messages}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="italic text-gray-600">
                        No messages here yet...
                    </div>
                )}
            </div>
            <div className="border-t border-t-slate-300">
                <form onSubmit={submitHandler}>
                    <input
                        value={data.messages}
                        onChange={(e) =>
                            setData({ ...data, messages: e.target.value })
                        }
                        type="text"
                        placeholder="Your messages..."
                        className="form-input w-full border-0 placeholder:font-light placeholder:italic focus:border-0 focus:outline-none focus:ring-0 focus:ring-blue-500"
                        id="messages"
                        name="messages"
                    />
                </form>
            </div>
        </div>
    );
}

Show.layout = (page) => <AppLayout children={page} />;
