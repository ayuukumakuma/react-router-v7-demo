import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonArticleCard = () => {
	return (
		<Card className="h-full">
			<div className="h-64">
				<Skeleton className="w-full h-full" />
			</div>
			<CardHeader>
				<Skeleton className="w-1/2 h-[1rem]" />
				<Skeleton className="w-full h-[1rem]" />
				<Skeleton className="w-full h-[1rem]" />
			</CardHeader>
		</Card>
	);
};
