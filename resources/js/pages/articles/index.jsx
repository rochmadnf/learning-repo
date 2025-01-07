import { Container } from '@/components/container';
import { Head } from '@inertiajs/react';
import { ArticleCard } from '@/pages/articles/partials/article-card';
import { AppLayout } from '@/layouts/app-layout';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { createDropdownMenuScope } from '@radix-ui/react-dropdown-menu';

export default function Index(props) {
    const { data: articles, meta } = props.articles;
    return (
        <>
            <Head title="Articles" />
            <Container>
                {articles.length > 0 ? (
                    <div className="grid gap-y-16 sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-3">
                        {articles.map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                ) : (
                    <p>No articles found</p>
                )}
            </Container>
            {meta.has_pages ? (
                <Pagination className={'mt-8 sm:mt-16'}>
                    <PaginationContent>
                        <PaginationItem className={Number(meta.current_page) !== 1 ? 'visible' : 'invisible'}>
                            <PaginationPrevious href={`${meta.path}?page=${Number(meta.current_page) - 1}`} />
                        </PaginationItem>
                        {meta.links.map((link, index) =>
                            link.label.toString() !== 'Next' && link.label.toString() !== 'Prev' ? (
                                <PaginationItem key={index}>
                                    <PaginationLink isActive={link.active} size="default" href={link.url}>
                                        {link.label}
                                    </PaginationLink>
                                </PaginationItem>
                            ) : null,
                        )}
                        <PaginationItem className={meta.last_page !== meta.current_page ? 'visible' : 'invisible'}>
                            <PaginationNext href={`${meta.path}?page=${Number(meta.current_page) + 1}`} />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            ) : null}
        </>
    );
}

Index.layout = (page) => <AppLayout children={page} />;
