import '../App.css'

function Cards({movies}) {
    return(
        <div id="movie" className="w-5/6 mx-auto text-stone-400 rounded-lg flex" style={{backgroundImage:`url(${movies.Images[2]})`}}>
            <div id='context' className="w-1/2 rounded-l-lg p-5">
                <div className="flex gap-4">
                    <img className="w-[15%]" src={movies.Poster} alt="" />
                    <div>
                        <p className="text-3xl text-white">{movies.Title}</p>
                        <p className="text-xs text-orange-800 mb-3">{movies.Year}, {movies.Director}</p>
                        <div className="flex gap-2 text-sm items-center mt-1">
                            <p className="border border-stone-600 p-1 rounded-md">{movies.Runtime}</p>
                            <p>{movies.Genre}</p>
                        </div>
                        <p className='text-sm mt-2'>⭐ {movies.imdbRating}/10</p>
                    </div>
                </div>
                <p className="mt-5 w-5/6">{movies.Plot}</p>
                <div className="mt-12 flex gap-5">
                    <i className="fa-solid fa-share-nodes"></i>
                    <i className="fa-solid fa-heart"></i>
                    <i className="fa-solid fa-message"></i>
                </div>
            </div>
        </div>
    )
}

export default Cards;

