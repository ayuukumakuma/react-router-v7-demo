import { NavLink } from "react-router";

type Props = {
	children: React.ReactNode;
};
export const Layout = ({ children }: Props) => {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="flex p-4 border-b-2">
				<div className="flex items-center gap-8">
					<NavLink to="/">
						<h1 className="font-extrabold text-xl">News Demo Site</h1>
					</NavLink>
					<div className="flex gap-4 font-semibold">
						<NavLink to="/" className="hover:underline">
							Top News
						</NavLink>
						<span className="font-normal">/</span>
						<NavLink to="/search" className="hover:underline">
							Search
						</NavLink>
					</div>
				</div>
			</header>
			<div className="p-6">{children}</div>
			<footer className="mt-auto p-4">footer</footer>
		</div>
	);
};
