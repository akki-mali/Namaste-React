const Shimmer = () => {
    return (
        <div className="shimmer-container flex flex-wrap ">
            {Array(10).fill("").map((e, index) => (
                <div key={index} className="shimmer-card h-[300px] bg-gray-50 m-2 rounded-xs w-[200px] p-4 ">
                    <div className="shimmer-image"></div>
                    <div className="shimmer-text"></div>
                    <div className="shimmer-text"></div>
                    <div className="shimmer-text"></div>
                </div>
            ))}
        </div>
    )
}

export default Shimmer;