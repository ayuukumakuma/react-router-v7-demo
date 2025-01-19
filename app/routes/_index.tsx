import { ArticleCard } from "@/components/article-card";
import { getNewsFromCountry } from "@/server/get-news-from-country";
import type { Route } from "./+types/_index";

export function meta() {
	return [
		{ title: "News Demo Site" },
		{ name: "description", content: "Developing By React Router v7" },
	];
}

export async function loader({ context }: Route.LoaderArgs) {
	const apiKey = context.cloudflare.env.NEWS_API_KEY;
	const data = await getNewsFromCountry(apiKey, "us");
	return data;
}

export default function Home({ loaderData }: Route.ComponentProps) {
	return (
		<div>
			<ArticleCard />
			{loaderData.articles.map((article) => (
				<div key={article.url}>
					<img
						className="max-w-screen-sm"
						src={article.urlToImage ?? ""}
						alt="alt"
					/>
					<a href={article.url} target="_blank" rel="noreferrer">
						{article.title}
					</a>
				</div>
			))}
		</div>
	);
}
