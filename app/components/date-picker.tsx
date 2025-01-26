import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import type { DateRange } from "react-day-picker";

type Props = {
	id?: string;
	value?: DateRange;
	onChange?: (dateRange: DateRange | undefined) => void;
};

export const DatePicker = ({ id, value, onChange }: Props) => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					id={id}
					variant={"outline"}
					className={cn(
						"w-full justify-start text-left font-normal",
						!value?.from && "text-muted-foreground",
					)}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{value?.from ? (
						value.to ? (
							<>
								{format(value.from, "PPP")} - {format(value.to, "PPP")}
							</>
						) : (
							format(value.from, "PPP")
						)
					) : (
						<span>Pick a date range</span>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<Calendar
					mode="range"
					selected={value}
					onSelect={onChange}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	);
};
