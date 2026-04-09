import axios from "axios"
import Link from "next/link"

export default async function Categories() {
	try {
	const response = await axios.get(`${process.env.MIGHT_BE_SKILL_ISSUE}/api/category`)
	const categories = response?.data
	console.log("categories", categories);
	return (
		<div className="w-full">
			<ul className="w-full inline-flex justify-center items-center gap-8 grotesque text-xl py-2">
				{categories?.rows ? (
categories.rows.map((row: CategoryRow) => (
						<li key={row.id} className="capitalize">
							<Link href={`?category=${row.id}`} className="cursor-pointer hover:text-[#EF636C]">{row.name}</Link>
						</li>
					))
				) : (
					<p>Loading categories...</p>
				)}
			</ul>
		</div>
	)
	}
	catch(err) {
		console.log("err", err);
		return (
			<div className="w-full flex flex-col justify-center items-center py-2">
				<p className="text-gray-400 text-md">Error loading categories...</p>
			</div>
		)
	}
}
