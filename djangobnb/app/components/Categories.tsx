import Image from "next/image";

const Categories = () => {
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src="/icons/amazing-views.jpg"
                    alt=""
                    width={20}
                    height={20}
                />
                Amazing Views
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/icons/icons.webp" alt="" width={20} height={20} />
                Icons
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src="/icons/cabins.jpg" alt="" width={20} height={20} />
                Cabins
            </div>
        </div>
    );
};
export default Categories;
