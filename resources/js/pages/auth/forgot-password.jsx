import { AuthenticatedCard } from '@/components/authenticated-card';
import { InputErrorMessage } from '@/components/input-error-message';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GuestLayout } from '@/layouts/guest-layout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submitForgotPassword = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <>
            <Head title="Forgot Password" />
            {status ? <div className="mb-4 text-sm font-medium text-green-600">{status}</div> : null}
            <AuthenticatedCard
                title="Forgot Password"
                description="Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."
            >
                <form onSubmit={submitForgotPassword} className="space-y-6">
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="mt-1"
                            autoFocus
                        />
                        <InputErrorMessage message={errors.email} className={'mt-2'} />
                    </div>

                    <div className="flex items-center justify-between">
                        <Button asChild variant="outline">
                            <Link href="/login">Cancel</Link>
                        </Button>
                        <Button type="submit" className="ml-4" disabled={processing}>
                            Send Reset Password Link
                        </Button>
                    </div>
                </form>
            </AuthenticatedCard>
        </>
    );
}

ForgotPassword.layout = (page) => <GuestLayout children={page} />;
