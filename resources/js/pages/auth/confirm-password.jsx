import { InputErrorMessage } from '@/components/input-error-message';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GuestLayout } from '@/layouts/guest-layout';
import { Head, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function ConfirmPassword() {
    const { data, setData, post, errors, processing, reset } = useForm({
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submitConfirmPassword = (e) => {
        e.preventDefault();

        post(route('password.confirm'));
    };

    return (
        <>
            <Head title="Confirm Password" />

            <div className="mb-4 text-sm text-muted-foreground">
                This is a secure area of the application. Please confirm your password before continuing.
            </div>

            <form onSubmit={submitConfirmPassword}>
                <div className="mt-4">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        className="mt-1 block w-full"
                        autoFocus
                    />
                    <InputErrorMessage message={errors.password} className="mt-2" />
                </div>
                <div className="mt-4 flex items-center justify-end">
                    <Button className="ml-4" disabled={processing}>
                        Confirm
                    </Button>
                </div>
            </form>
        </>
    );
}

ConfirmPassword.layout = (page) => <GuestLayout children={page} />;
