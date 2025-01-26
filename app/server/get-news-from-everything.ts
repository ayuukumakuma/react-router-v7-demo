import type { NewsApiResponse } from "@/types/news";
import { cache } from "react";

const url = "https://newsapi.org/v2/everything/";

export const getNewsFromEverything = cache(
	async (
		apiKey: string,
		q: string,
		language: string,
		from: string,
		to: string,
		page: number,
	): Promise<NewsApiResponse> => {
		try {
			const response = await fetch(
				`${url}?q=${q}&language=${language}&from=${from}&to=${to}&pageSize=21&page=${page}`,
				{
					headers: {
						"X-Api-Key": apiKey,
					},
				},
			);
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
