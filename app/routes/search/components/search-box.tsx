import { Combobox } from "@/components/combobox";
import { DatePicker } from "@/components/date-picker";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormItemWrapper } from "@/routes/search/components/form-item-wrapper";
import { type FormEvent, useState } from "react";
import type { DateRange } from "react-day-picker";

type Props = {
	id?: string;
	onSubmit: (formData: FormData) => void;
	isSubmitting: boolean;
};

export type LanguageValue =
	| "en"
	| "ar"
	| "de"
	| "es"
	| "fr"
	| "he"
	| "it"
	| "nl"
	| "no"
	| "pt"
	| "ru"
	| "sv"
	| "ud"
	| "zh";

type ComboboxOption = {
	label: string;
	value: LanguageValue;
};

export const LANGUAGES: ComboboxOption[] = [
	{ label: "العربية", value: "ar" },
	{ label: "Deutsch", value: "de" },
	{ label: "English", value: "en" },
	{ label: "Español", value: "es" },
	{ label: "Français", value: "fr" },
	{ label: "עברית", value: "he" },
	{ label: "Italiano", value: "it" },
	{ label: "Nederlands", value: "nl" },
	{ label: "Norsk", value: "no" },
	{ label: "Português", value: "pt" },
	{ label: "Русский", value: "ru" },
	{ label: "Svenska", value: "sv" },
	{ label: "اردو", value: "ud" },
	{ label: "中文", value: "zh" },
] satisfies ComboboxOption[];

export const SearchBox = ({ onSubmit, isSubmitting }: Props) => {
	const [dateRange, setDateRange] = useState<DateRange | undefined>();
	const [language, setLanguage] = useState<LanguageValue | undefined>();
	const [query, setQuery] = useState<string | undefined>();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget as HTMLFormElement);

		if (query) {
			formData.set("q", query);
		}

		if (dateRange?.from) {
			formData.set("from", dateRange.from.toISOString());
		}

		if (dateRange?.to) {
			formData.set("to", dateRange.to.toISOString());
		}

		if (language) {
			formData.set("language", language);
		}

		onSubmit(formData);
	};

	return (
		<Card>
			<CardHeader className="font-bold">
				Please enter the search for information...
			</CardHeader>
			<CardContent>
				<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
					<FormItemWrapper>
						<Label htmlFor="date-range">Date</Label>
						<DatePicker
							id="date-range"
							value={dateRange}
							onChange={setDateRange}
						/>
					</FormItemWrapper>
					<FormItemWrapper>
						<Label htmlFor="language">Language</Label>
						<Combobox
							id="language"
							options={LANGUAGES}
							value={language ?? ""}
							setValue={(value) => setLanguage(value as LanguageValue)}
						/>
					</FormItemWrapper>
					<FormItemWrapper>
						<Label htmlFor="query">Keyword</Label>
						<Input
							id="query"
							type="text"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							placeholder="Search..."
						/>
					</FormItemWrapper>
					<Button type="submit" className="font-extrabold w-full">
						{isSubmitting ? "Searching..." : "Search"}
					</Button>
				</form>
			</CardContent>
		</Card>
	);
};
