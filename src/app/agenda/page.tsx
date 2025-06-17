import { getPosts } from "@/actions/post.action";
import { getDbUserId } from "@/actions/user.action";
import CreatePost from "@/components/CreatePost";
import PostCard from "@/components/PostCard";
import WhoToFollow from "@/components/WhoToFollow";
import Sidebar from "@/components/Sidebar"; // Import your sidebar component
import { currentUser } from "@clerk/nextjs/server";

export default async function Agenda() {
    const user = await currentUser();
    const posts = await getPosts();
    const dbUserId = await getDbUserId();

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Sidebar */}
            <div className="hidden lg:block lg:col-span-2 sticky top-20">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-6">
                {user ? <CreatePost /> : null}

                <div className="space-y-6">
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} dbUserId={dbUserId} />
                    ))}
                </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block lg:col-span-4 sticky top-20">
                <WhoToFollow />
            </div>
        </div>
    );
}   