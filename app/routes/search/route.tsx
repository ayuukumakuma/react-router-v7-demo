import { ArticleCard } from "@/components/article-card";
import { Pagination } from "@/components/pagination";
import { SkeletonArticleCard } from "@/components/skeleton-article-card";
import { Title } from "@/components/title";
import { Separator } from "@/components/ui/separator";
import { SearchBox } from "@/routes/search/components/search-box";
import { getNewsFromEverything } from "@/server/get-news-from-everything";
import { useFetcher } from "react-router";
import type { Route } from ".react-router/types/app/routes/search/+types/route";

export async function action({ request, context }: Route.ActionArgs) {
	const url = new URL(request.url);
	const page = Number(url.searchParams.get("page") ?? 1);
	const search = url.search;

	const formData = await request.formData();
	const q = formData.get("q") as string;
	const language = formData.get("language") as string;
	const from = formData.get("from") as string;
	const to = formData.get("to") as string;

	const apiKey = context.cloudflare.env.NEWS_API_KEY;
	const data = await getNewsFromEverything(apiKey, q, language, from, to, page);

	const totalPage = Math.ceil(data.totalResults / 21);

	return {
		page,
		totalPage,
		totalCount: data.totalResults,
		search,
		articles: data.articles,
	};
}

type ActionReturnType = Awaited<ReturnType<typeof action>>;

export default function Search() {
	const fetcher = useFetcher<ActionReturnType>();
	const data = fetcher.data ?? {
		page: 1,
		totalPage: 0,
		totalCount: 0,
		search: "",
		articles: [],
	};
	const { page, totalPage, totalCount, search, articles } = data;
	const searchParams = new URLSearchParams(search);
	const isSubmitting = fetcher.state === "submitting";

	return (
		<div className="flex flex-col gap-6">
			<Title>Search</Title>
			<div className="flex justify-center">
				<SearchBox
					onSubmit={(formData) => {
						fetcher.submit(formData, {
							method: "POST",
							encType: "multipart/form-data",
						});
					}}
					isSubmitting={isSubmitting}
				/>
			</div>
			<Separator />
			{isSubmitting ? (
				<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
					{Array.from({ length: 21 }).map((_, index) => (
						<SkeletonArticleCard key={index} />
					))}
				</div>
			) : (
				<>
					{totalCount > 0 ? (
						<>
							<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
								{articles.map((article) => (
									<ArticleCard
										key={article.url}
										url={article.url}
										src={article.urlToImage}
										title={article.title}
										description={article.description}
									/>
								))}
							</div>
							<Pagination
								currentPage={Number(page)}
								totalPage={totalPage}
								searchParams={searchParams}
							/>
						</>
					) : (
						<p className="text-center">No articles found.</p>
					)}
				</>
			)}
		</div>
	);
}
