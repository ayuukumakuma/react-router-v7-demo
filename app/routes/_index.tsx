import { ArticleCard } from "@/components/article-card";
import { Pagination } from "@/components/pagination";
import { Title } from "@/components/title";
import { getNewsFromCountry } from "@/server/get-news-from-country";
import type { Route } from "./+types/_index";

export function meta() {
	return [
		{ title: "News Demo Site" },
		{ name: "description", content: "Developing By React Router v7" },
	];
}

export async function loader({ context, request }: Route.LoaderArgs) {
	const userAgent = request.headers.get("User-Agent") ?? "";
	const url = new URL(request.url);
	const search = url.search;
	const page = Number(url.searchParams.get("page") ?? 1);

	const apiKey = context.cloudflare.env.NEWS_API_KEY;
	const data = await getNewsFromCountry(apiKey, userAgent, "us", page);
	console.log(data);

	const totalPage = Math.ceil(data.totalResults / 21);

	return {
		page,
		totalPage,
		search,
		articles: data.articles,
	};
}

export default function Home({ loaderData }: Route.ComponentProps) {
	const { page, totalPage, search, articles } = loaderData;

	const searchParams = new URLSearchParams(search);

	return (
		<div className="flex flex-col gap-6">
			<Title>Top News</Title>
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
		</div>
	);
}
