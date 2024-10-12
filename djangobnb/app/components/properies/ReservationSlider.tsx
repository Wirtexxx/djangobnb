const ReservationSlider = () => {
    return (
        <aside className="flex flex-col justify-between mt-4 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <div className="">
                <h2 className="mb-5 text-2xl">$179 night</h2>
                <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                    <label className="block font-bold text-xs">Guests</label>
                    <select name="" id="" className="w-full -ml-1 text-xm">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                    </select>
                </div>
            </div>
            <div className="cursor-pointer w-full rounded-xl bg-airbnb mb-6 py-6 text-bold text-center text-white hover:bg-airbnb-dark">
                Book
            </div>
            <div className="mb-4 flex justify-between align-center">
                <p>179$ * 4 night</p>
                <p>716$</p>
            </div>
            <div className="mb-4 flex justify-between align-center">
                <p>Fee</p>
                <p>40$</p>
            </div>
            <hr className="mb-4" />

            <div className="flex justify-between align-center">
                <p>Total</p>
                <p>500$</p>
            </div>
        </aside>
    );
};
export default ReservationSlider;
