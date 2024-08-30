const Review = () => {
    return (
        <div className="w-full  border p-10 rounded">
            <div class="w-full  flex  justify-center gap-8">
                <div class="flex items-center gap-4">
                    <div class="rounded-full w-12 h-12 bg-black overflow-hidden">
                        <img src="https://rairaksa.github.io/assets/img/rai.jpg" />
                    </div>
                    <div class="flex flex-col tracking-wider">
                        <label class="text-gray-600 font-bold text-base">Rai Raksa Muhamad</label>
                        <label class="text-gray-400 font-normal text-sm">Fullstack PHP Developer</label>
                    </div>
                </div>
                <h1 class="text-4xl text-gray-600 leading-relaxed  w-4/5">
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                </h1>
            </div>
        </div>
    );
}



export default Review;