import { Link, usePage } from '@inertiajs/react';

import { cn } from '@/lib/utils';
import { Container } from '@/components/container';
import { Logo } from '@/components/logo';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { IconChevronDown } from '@irsyadadl/paranoid';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function NavLink({ className, ...props }) {
    return (
        <Link
            className={cn('p-4 text-sm text-muted-foreground transition duration-200 hover:text-foreground', className)}
            {...props}
        />
    );
}

export function Navbar() {
    const { auth } = usePage().props;

    return (
        <nav className="border-b bg-secondary/50 py-1">
            <Container>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <Logo />

                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/articles">Articles</NavLink>
                        <DropdownMenu>
                            <DropdownMenuTrigger
                                className={cn(
                                    'group flex items-center p-4 text-sm text-muted-foreground transition duration-200 hover:text-foreground focus:outline-none',
                                    'data-[state=open]:text-foreground',
                                )}
                            >
                                Categories
                                <IconChevronDown className="ml-2 size-4  duration-200 group-data-[state=open]:rotate-180" />
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="w-56">
                                <DropdownMenuItem>General</DropdownMenuItem>
                                <DropdownMenuItem>Laravel</DropdownMenuItem>
                                <DropdownMenuItem>Next.js</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div className="flex items-center gap-x-4">
                        {auth.user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Avatar className="size-8">
                                        <AvatarImage src="https://github.com/rochmadnf.png" />
                                        <AvatarFallback>RD</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent className="w-56" align="end">
                                    <DropdownMenuItem asChild>
                                        <Link href="/dashboard">Dashboard</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="w-full" asChild>
                                        <Link href="/logout" as="button" method="post">
                                            Logout
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <NavLink href="/login">Login</NavLink>
                        )}
                    </div>
                </div>
            </Container>
        </nav>
    );
}
