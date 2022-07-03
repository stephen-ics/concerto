import { useAuthProvider } from '../components/context/AuthContext';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
	const { signIn, user, userMetaData } = useAuthProvider();

	useEffect(() => {
		console.log(user);
		console.log('meta', userMetaData);
	}, [user]);

	return (
		<div className="object-fill bg-[url('https://cdn.discordapp.com/attachments/767561915874148382/992618551993180241/unknown.png')] bg-opacity-50 bg-no-repeat bg-cover h-full">
			<div className="flex flex-col justify-center items-center h-full">
				<h1 className="text-6xl w-2/5 p-5 bg-blue-1000/[.4] text-white text-center">
					Your one-stop shop for concert tickets
				</h1>

				<div className="flex">
					<Link href="/profile">
						<button className="w-56 text-4xl mr-10 text-white mt-10 rounded-3xl p-5 bg-gradient-to-r from-blue-500/[.7] to-pink-400/[.7]">
							Get Started
						</button>
					</Link>
					<button
						onClick={signIn}
						className="w-56 text-4xl text-white mt-10 rounded-3xl p-5 bg-gradient-to-r from-blue-500/[.7] to-pink-400/[.7]"
					>
						Sign In
					</button>
				</div>
			</div>
		</div>
	);
}
