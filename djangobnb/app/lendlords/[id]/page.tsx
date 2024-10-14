import Image from "next/image";
import ContactButton from "@/app/components/ContactButton";
import PropertyList from "@/app/components/properies/PropertyList";

const LendlordDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <aside className="col-span-1 mb-4">
                    <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
                        <Image
                            src="/profile_pic_1.webp"
                            className="rounded-full mb-6"
                            width={200}
                            height={200}
                            alt=""
                        />
                        <h1 className="mb-6 text-2xl">Lendlord name</h1>
                        <ContactButton />
                    </div>
                </aside>
                <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <PropertyList />
                    </div>
                </div>
            </div>
        </main>
    );
};
export default LendlordDetailPage;