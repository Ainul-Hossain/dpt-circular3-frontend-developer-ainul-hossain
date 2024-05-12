import { IoIosNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

function Header() {
	return (
		<header className="flex w-full justify-center items-center bg-slate-900 h-16 bg-white-900">
			<nav className="flex w-4/5 justify-between  text-white opacity-90 text-start font-semibold">
				<ul className="flex flex-row gap-10">
					<li>
						<a href="">Dashboard</a>
					</li>
					<li>
						<a href="">Master Price</a>
					</li>
					<li>
						<a href="">Custom Price</a>
					</li>
					<li>
						<a href="">Calendar</a>
					</li>
					<li>
						<a href="">Reports</a>
					</li>
				</ul>

				<ul className="flex flex-row gap-5 items-center cursor-pointer">
					<li>
						<IoIosNotificationsOutline className='min-w-7 min-h-7' />
					</li>
					<li>
						<RxAvatar className="min-w-7 min-h-7" />
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header;
