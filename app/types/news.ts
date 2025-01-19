// Response object
type NewsApiResponse = {
	status: "ok" | "error";
	totalResults: number;
	articles: Article[];
	code?: string;
	message?: string;
};

// Article object
type Article = {
	source: Source;
	author: string | null;
	title: string;
	description: string | null;
	url: string;
	urlToImage: string | null;
	publishedAt: string;
	content: string | null;
};

// Source object
type Source = {
	id: string | null;
	name: string;
};

// Export the types
export type { NewsApiResponse, Article, Source };
