import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import NoImage from "/images/no-image.png?url";
import { Link } from "react-router";

type Props = {
	url: string;
	src: string | null;
	title: string;
	description: string | null;
};

export const ArticleCard = (props: Props) => {
	const { url, src, title, description } = props;

	return (
		<Link to={url} target="_blank">
			<Card className="h-full hover:scale-105 transition-transform">
				<div className="overflow-hidden rounded-t-lg h-64">
					{src ? (
						<img src={src} alt={title} className="w-full h-full object-cover" />
					) : (
						<div className="w-full h-full flex justify-center items-center">
							<p className="text-4xl">No Image</p>
						</div>
					)}
				</div>
				<CardHeader>
					<CardTitle className="leading-6">{title}</CardTitle>
					<CardDescription>{description || "No Description."}</CardDescription>
				</CardHeader>
			</Card>
		</Link>
	);
};
