import Review from "../components/review.component";

const Dashboard = () => {   
    return (
        <div>
            <div>
                <h1>Dashboard</h1>
                <div className="font-bold text-xl">
                    Reviews
                </div>
                <div className="w-[80%]">
                    <Review/>
                    <Review/>
                    <Review/>
                    <Review/>
                    <Review/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
