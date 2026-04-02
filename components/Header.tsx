import Link from "next/link"
import Image from "next/image"
import {IoMdCart} from "react-icons/io"
import {FaSearch} from "react-icons/fa"

export default function Header() {
	return (
		<header dir="rtl" className="w-full h-26 relative grid grid-cols-3">
			<div dir="ltr" className="h-full w-full flex flex-col justify-around items-start p-4">
				<div className="relative inline-flex justify-center items-center gap-8">
					<button className="inline-flex justify-center items-center cursor-pointer">
						<IoMdCart size={22} color="#113E53" />	
						<span className="uppercase ml-2 grotesque font-semibold text-[#113E53]">cart</span>
					</button>

					<div className="inline-flex justify-items items-center gap-1 capitalize text-gray-500 text-sm">
						<span>0</span>
						<p>cart items</p>
						<div>
							<span>K</span>
							<span>0.00</span>
						</div>
					</div>
				</div>
				<div>
					<div className="inline-flex justify-center items-center gap-2 border-b-1 border-[#113E53] px-1">
						<FaSearch color="#113E53" />
						<input
							type="text"
							placeholder="products, categories..."
							className="flex-1 outline-none text-[#113E53]"
						/>
					</div>
				</div>
			</div>

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
		</header>
	)
}
