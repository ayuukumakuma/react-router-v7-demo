import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

type ComboboxOption = {
	label: string;
	value: string;
};

type Props = {
	options: ComboboxOption[];
	id?: string;
	value: string;
	setValue: (value: string) => void;
};

export const Combobox = ({ options, id, value, setValue }: Props) => {
	const [open, setOpen] = useState(false);
	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					id={id}
					variant="outline"
					aria-expanded={open}
					aria-controls="combobox-list"
					className={cn(
						"w-full justify-between",
						!value && "text-muted-foreground",
					)}
				>
					{value
						? options.find((option) => option.value === value)?.label
						: "Select language"}
					<ChevronsUpDown className="opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandInput placeholder="Search language..." className="h-9" />
					<CommandList>
						<CommandEmpty>No language found.</CommandEmpty>
						<CommandGroup>
							{options.map((option) => (
								<CommandItem
									value={option.value}
									key={option.value}
									onSelect={() => {
										setValue(option.value);
										setOpen(false);
									}}
								>
									{option.label}
									<Check
										className={cn(
											"ml-auto",
											value === option.value ? "opacity-100" : "opacity-0",
										)}
									/>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};
