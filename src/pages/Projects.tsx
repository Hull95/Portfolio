import {CardsInfo} from "@/app/constants/cardInfo";

export default function Projects() {
    return (
        <section id="projects" className="py-10 text-center">
            <h2 className="text-2xl mb-8">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
                {CardsInfo.map((item, index) => (
                    <div
                        key={index}
                        className="max-w-sm mx-auto rounded overflow-hidden shadow-lg"
                    >
                        {/*<Image*/}
                        {/*    src={profileImage}*/}
                        {/*    alt="Profile"*/}
                        {/*    width={300}*/}
                        {/*    height={300}*/}
                        {/*    className="w-full max-w-[90%] sm:max-w-[60%] md:max-w-[95%] lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[70%] h-auto object-contain" />*/}
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{item.title}</div>
                            <p className="text-gray-700 text-base">
                                {item.description}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            {item.tags?.map((tag: string, tagIndex: number) => (
                                <span
                                    key={tagIndex}
                                    className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 border border-main-green"                                >
                                  {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}
