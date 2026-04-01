import Link from "next/link"
import Image from "next/image"

export default function Header() {
	return (
		<div dir="rtl" className="w-full h-26 relative grid grid-cols-3">
			<div>actions</div>
			<div className="h-full w-full flex flex-row justify-center items-center relative">
				<Link href="/">
					<Image
						src="/estore-high-res.png"
						alt="estore high res logo"
						height="203"
						width="323"
						className="object-cover"
					/>
				</Link>
			</div>
		</div>
	)
}
