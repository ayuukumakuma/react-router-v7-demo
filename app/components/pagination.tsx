import { buttonVariants } from "@/components/ui/button";
import {
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
	Pagination as UiPagination,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

interface PaginationProps {
	currentPage: number;
	totalPage: number;
	searchParams: URLSearchParams;
}

export function Pagination({
	currentPage,
	totalPage,
	searchParams,
}: PaginationProps) {
	const generateHref = (page: number) => {
		if (page < 1 || page > totalPage) return;
		const _searchParams = new URLSearchParams(searchParams);
		_searchParams.set("page", String(page));
		return `/?${_searchParams.toString()}`;
	};

	const prevHref = generateHref(currentPage - 1);
	const nextHref = generateHref(currentPage + 1);

	return (
		<UiPagination>
			<PaginationContent className="flex gap-4">
				<PaginationItem>
					<PaginationPrevious
						href={prevHref}
						className={cn({
							"opacity-50 cursor-not-allowed": !prevHref,
						})}
					/>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink
						className={cn(
							buttonVariants({
								variant: "outline",
							}),
							"hover:bg-inherit",
						)}
					>
						{currentPage}
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationNext
						href={nextHref}
						className={cn({
							"opacity-50 cursor-not-allowed": !nextHref,
						})}
					/>
				</PaginationItem>
			</PaginationContent>
		</UiPagination>
	);
}
