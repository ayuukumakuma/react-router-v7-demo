import type { NewsApiResponse } from "@/types/news";
import { cache } from "react";

const url = "https://newsapi.org/v2/top-headlines/";

export const getNewsFromCountry = cache(
	async (apiKey: string, country: string): Promise<NewsApiResponse> => {
		try {
			const response = await fetch(`${url}?country=${country}`, {
				headers: {
					"X-Api-Key": apiKey,
				},
			});
			return response.json();
		} catch (error) {
			console.error(error);
			return {
				status: "error",
				totalResults: 0,
				articles: [],
			};
		}
	},
);
