import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};
export const Title = ({ children }: Props) => {
	return <h1 className="text-4xl font-bold">{children}</h1>;
};
