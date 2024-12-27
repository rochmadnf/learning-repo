import { AuthenticatedCard } from '@/components/authenticated-card';
import { InputErrorMessage } from '@/components/input-error-message';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GuestLayout } from '@/layouts/guest-layout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function ResetPassword({ token, email }) {
    const { data, setData, processing, reset, post, errors } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submitResetPassword = (e) => {
        e.preventDefault();

        post(route('password.store'));
    };

    const inputOnChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    return (
        <>
            <Head title="Reset Password" />
            <AuthenticatedCard title="Reset Password" description="Enter your new password below">
                <form onSubmit={submitResetPassword} className="space-y-6">
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            value={data.email}
                            type="email"
                            className="mt-1"
                            autoComplete="username"
                            onChange={inputOnChange}
                        />
                        <InputErrorMessage message={errors.email} className="mt-2" />
                    </div>
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            value={data.password}
                            className="mt-1"
                            autoComplete="new-password"
                            autoFocus
                            onChange={inputOnChange}
                        />
                    </div>

                    <div>
                        <Label htmlFor="password_confirmation">Confirm Password</Label>
                        <Input
                            id="password_confirmation"
                            name="password_confirmation"
                            type="password"
                            value={data.password_confirmation}
                            onChange={inputOnChange}
                            autoComplete="new-password"
                            className="mt-1"
                        />
                        <InputErrorMessage message={errors.password_confirmation} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-between">
                        <Button asChild variant="outline">
                            <Link href="/login">Cancel</Link>
                        </Button>
                        <Button type="submit" className="ml-4" disabled={processing}>
                            Reset Password
                        </Button>
                    </div>
                </form>
            </AuthenticatedCard>
        </>
    );
}

ResetPassword.layout = (page) => <GuestLayout children={page} />;
