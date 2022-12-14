import AppLayout from "@/Layouts/AppLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head, useForm, usePage } from "@inertiajs/inertia-react";
import moment from "moment-timezone";
import { useRef, useEffect } from "react";

export default function Show(props) {
    const { auth } = usePage().props;
    const scrollRef = useRef(null);
    const messageRef = useRef(null);
    const { user, chats } = props;

    const { data, setData, reset, errors, post } = useForm({ messages: "" });

    const submitHandler = (e) => {
        e.preventDefault();
        post(route("chats.store", user.username), {
            onSuccess: () => {
                reset("messages");
                messageRef?.current?.focus();
                scrollRef.current?.scrollTo({
                    left: 0,
                    top: scrollRef.current?.scrollHeight + 2000,
                    behavior: "smooth",
                });
            },
        });
    };

    Echo.channel("chats").listen("ChatMessageSent", ({ chat }) => {
        Inertia.reload({
            preserveScroll: true,
            only: ["chats"],
            onSuccess: () => {
                reset("messages");
                messageRef.current?.focus();
                scrollRef.current?.scrollTo({
                    left: 0,
                    top: scrollRef.current?.scrollHeight + 2000,
                    behavior: "smooth",
                });
            },
        });
    });

    useEffect(() => {
        return () => {
            reset("messages");
            messageRef.current?.focus();
            scrollRef.current?.scrollTo({
                left: 0,
                top: scrollRef.current?.scrollHeight + 2000,
                behavior: "smooth",
            });
        };
    }, []);

    return (
        <div className="flex h-screen flex-col justify-between">
            <Head>
                <title>{`Chat with ${user.name}`}</title>
            </Head>

            <div className="border-b border-b-slate-300 p-4 text-lg font-semibold capitalize">
                {user.name}
            </div>
            <div
                className="flex flex-1 flex-col space-y-2 overflow-y-auto px-4 py-2"
                ref={scrollRef}
            >
                {chats.length ? (
                    chats.map((chat) => (
                        <div
                            key={chat.id}
                            className={`flex w-fit max-w-[90%] flex-col rounded-lg p-3 lg:max-w-[80%] ${
                                auth.user.id === chat.sender_id
                                    ? "self-end bg-green-500 text-white"
                                    : "bg-slate-200 text-gray-900"
                            }`}
                        >
                            <p>{chat.messages}</p>
                            <small className="w-fit self-end text-[0.625rem]">
                                {moment(chat.created_at)
                                    .tz(moment.tz.guess())
                                    .format("D-M-Y, H:mm")}
                            </small>
                        </div>
                    ))
                ) : (
                    <div className="italic text-gray-600">
                        No messages here yet...
                    </div>
                )}
            </div>
            <div className="border-t border-t-slate-300">
                <form onSubmit={submitHandler}>
                    <input
                        ref={messageRef}
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
