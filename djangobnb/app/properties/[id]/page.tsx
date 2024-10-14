import Image from "next/image";
import ReservationSlider from "@/app/components/properies/ReservationSlider";
const PropertyDetailePage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6">
            <h1 className="mb-4 text-4xl">Property</h1>
            <div className="w-full h-[65vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src="/forest.webp"
                    alt="forest"
                    className="object-cover w-full h-full"
                ></Image>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Name</h1>
                    <span className="mb-6 block text-lg text-gray-600">
                        4 guests - 2 bed
                    </span>
                    <hr />
                    <div className="py-6 flex items-center space-x-4">
                        <Image
                            src="/profile_pic_1.webp"
                            className="rounded-full"
                            width={50}
                            height={50}
                            alt=""
                        ></Image>
                        <div className="text-lg">
                            <p>Jone is your host</p>
                            <p className="text-gray-600 text-sm">
                                Supperhost 2 years hosting
                            </p>
                        </div>
                    </div>
                    <hr />
                    <p className="mt-6 text-lg">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Mollitia nihil molestias ullam veritatis nisi
                        consectetur odio placeat unde cum iste. Nihil magnam
                        repudiandae quibusdam eligendi enim nobis doloremque
                        cumque laboriosam.
                    </p>
                </div>
                <ReservationSlider />
                <div className=""></div>
            </div>
        </main>
    );
};
export default PropertyDetailePage;
