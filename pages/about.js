const about = () => {
	return (
		<div className="bg-blue-950 w-full h-full overflow-auto">
			<h1 className="my-12 text-white text-5xl m-5 text-center">
				Meet the Team
			</h1>
			<section className="flex flex-wrap gap-4 items-center justify-around">
				<div className="flex items-center flex-col m-5">
					<h1 className="text-4xl text-white m-5">Musa Khan</h1>
					<img
						src="/char.jpeg"
						className="w-48 h-48 rounded-full object-cover"
					/>
					<h3 className="text-2xl text-white w-96 my-5">
						Hey! My name is Musa Khan, I enjoy programming in my
						free time, big fan of cars, and love basketball.
					</h3>
				</div>
				<div className="flex flex-col items-center">
					<h1 className="text-4xl text-white m-5">Aritro Saha</h1>
					<img
						src="/bulb.jpeg"
						className="w-48 h-48 rounded-full object-cover"
					/>
					<h3 className="text-2xl text-white w-96 my-5">
						Hi! I'm Aritro. I'm in Grade 10, and I enjoy biking
						during the summer!
					</h3>
				</div>
				<div className="flex flex-col items-center">
					<h1 className="text-4xl text-white m-5">Aditya Ajay</h1>
					<img
						src="/squirtle.jpeg"
						className="w-48 h-48 rounded-full object-cover"
					/>
					<h3 className="text-2xl text-white w-96 my-5">
						Hi, I’m Aditya! I’m a Grade 11 student at John Fraser. I
						love playing classical music and reading Murakami.
					</h3>
				</div>
				<div className="flex flex-col items-center">
					<h1 className="text-4xl text-white m-5">Stephen Ni</h1>
					<img
						src="/panch.webp"
						className="w-48 h-48 rounded-full object-cover"
					/>
					<h3 className="text-2xl text-white w-96 my-5">
						Hey there! My name is Stephen, and I'm in grade 11. I
						LOVE turtles and learning more about code!
					</h3>
				</div>
			</section>
		</div>
	);
}; // Steven you have no path to these images, where r they at?? hm

export default about;
