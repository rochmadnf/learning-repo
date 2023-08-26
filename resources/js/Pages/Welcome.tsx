import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/shadcn/ui/alert-dialog"
import { ToggleTheme } from '@/shadcn/ui/toggle-theme';


export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
        <>
            <Head>
                <title>Rochmad</title>
                <meta name="description" content="Rochmad Ganteng" />
            </Head>
            <div className="bg-purple-100 dark:bg-red-500">
                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    <AlertDialog>
                        <AlertDialogTrigger>Open</AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
                <div>
                    Hello
                </div>

                <ToggleTheme />
            </div>
        </>
    );
}
