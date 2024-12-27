import { AuthenticatedCard } from '@/components/authenticated-card';
import { InputErrorMessage } from '@/components/input-error-message';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GuestLayout } from '@/layouts/guest-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Register() {
    const { data, setData, processing, errors, reset, post } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submitNewUser = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    const inputOnChange = (e) => {
        return setData(e.target.name, e.target.value);
    };

    return (
        <>
            <Head title="Register" />
            <AuthenticatedCard title="Create a new account" description={'Or log in to your existing account'}>
                <form onSubmit={submitNewUser} className="space-y-6">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            value={data.name}
                            className="mt-1"
                            onChange={inputOnChange}
                            autoComplete="name"
                            autoFocus
                            required
                        />
                        <InputErrorMessage message={errors.name} className="mt-2" />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={data.email}
                            className="mt-1"
                            autoComplete="username"
                            onChange={inputOnChange}
                            required
                        />
                        <InputErrorMessage message={errors.email} className={'mt-2'} />
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
                            onChange={inputOnChange}
                            required
                        />
                        <InputErrorMessage message={errors.password} className={'mt-2'} />
                    </div>
                    <div>
                        <Label htmlFor="password_confirmation">Confirm Password</Label>
                        <Input
                            id="password_confirmation"
                            name="password_confirmation"
                            type="password"
                            value={data.password_confirmation}
                            className="mt-1"
                            onChange={inputOnChange}
                            required
                        />
                        <InputErrorMessage message={errors.password_confirmation} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-between">
                        <Button asChild variant="outline">
                            <Link href="/login">Login</Link>
                        </Button>

                        <Button type="submit" className="ml-4" disabled={processing}>
                            Register
                        </Button>
                    </div>
                </form>
            </AuthenticatedCard>
        </>
    );
}

Register.layout = (page) => <GuestLayout children={page} />;
