import React from 'react';

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:1/12 lg:w-4/12 flex flex-col gap-1">
                        <img
                            src="https://play-lh.googleusercontent.com/tVZ6qF6y3qdqmfr9HCtsN3nRQhKywNfA0iqGyoNnrgeHBPFTLc5WB0OauQGUjkVecxI=w526-h296-rw "
                            alt="image"
                        />
                        <img src="https://play-lh.googleusercontent.com/GTaTJACIhcXeAeCj3gTr95OLFmPQH8e73WbYb9fiUnS_qopTJLUAT-wofHzr6-N-b9I4=w526-h296-rw" alt="image2" />
                    </div>
                    <div className="md:1/12 lg:w-4/12 flex flex-col gap-1">
                        <img
                            src="https://play-lh.googleusercontent.com/m7bmJ7ABfL9rWFnQnYK4XPhycTo2WbyU9zjd_5R8UJNvYpfNmryWSrmoKUKSNsyh528=w526-h296-rw"
                            alt="image"
                        />
                        <img src="https://play-lh.googleusercontent.com/H_YiIcet-xzVYkB4lk8YjdEnSHo91mW_YoqZv117Yaw95_Bl_ZfB91FstqhioDdfKoAx=w526-h296-rw" alt="image2" />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Instagram is a free social media app where users can share photos, videos, and stories.
                        </h2>
                        <p className="mt-6 text-gray-600">
                            It was launched in 2010 and is now owned by Meta (formerly Facebook). People use it to express themselves, connect with others, and follow trends.
                            You can follow friends, celebrities, or brands on Instagram. When people like, comment on, or share your content, it boosts your engagement. High engagement can help your posts get discovered by a wider audience.
                        </p>
                        <p className="mt-4 text-gray-600">
                            <b>Instagram for Business</b> <br />
                            Many businesses use Instagram to promote products and connect with customers. With tools like Instagram Ads and Insights, brands can target audiences, track performance, and grow online presence.
                            <br />
                            <b>Hashtags and Trends</b> <br />
                            Hashtags (#) help people discover content. Trending hashtags or viral challenges can increase your visibility. Using relevant hashtags makes it easier for others to find your posts.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}