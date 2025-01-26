import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};
export const FormItemWrapper = ({ children }: Props) => {
	return <div className="flex flex-col gap-2">{children}</div>;
};
