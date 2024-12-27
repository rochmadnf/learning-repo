import { AuthenticatedCard } from '@/components/authenticated-card';
import { InputErrorMessage } from '@/components/input-error-message';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GuestLayout } from '@/layouts/guest-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
        email: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submitLogin = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <>
            <Head title="Log in" />

            {status ? <div className="mb-4 text-sm font-medium text-green-600">{status}</div> : null}

            <AuthenticatedCard title={'Log in to your account.'} description={'Or create new account.'}>
                <form onSubmit={submitLogin} className="space-y-6">
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1"
                            autoComplete="username"
                            autoFocus
                            onChange={(e) => setData('email', e.target.value)}
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
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <InputErrorMessage message={errors.password} className={'mt-2'} />
                    </div>

                    <div className="flex items-center justify-between">
                        <label htmlFor="remember" className="flex items-center">
                            <Checkbox
                                name="remember"
                                id="remember"
                                checked={data.remember}
                                onCheckedChange={(e) => setData('remember', e)}
                            />
                            <span className="ms-2 text-sm">Remember me</span>
                        </label>
                        {canResetPassword ? (
                            <Link
                                href={route('password.request')}
                                className="text-sm text-muted-foreground transition duration-200 hover:text-foreground"
                            >
                                Forgot Password?
                            </Link>
                        ) : null}
                    </div>

                    <div className="flex items-center justify-between">
                        <Button variant="outline" asChild>
                            <Link href="/register">Register</Link>
                        </Button>
                        <Button className="ms-4" disabled={processing}>
                            Log in
                        </Button>
                    </div>
                </form>
            </AuthenticatedCard>
        </>
    );
}

Login.layout = (page) => <GuestLayout children={page} />;
