import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react'

type Post = {
  username: string
  avatarUrl: string
  imageUrl: string
  numberOfLikes: number
  description: string
  timeAgo: string
}

export default function PostItem ({ post }: { post: Post }) {
  return (
    <div className="bg-white border border-gray-300 rounded-md mb-6 max-w-md w-full">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center">
          <img
            src={post.avatarUrl}
            alt={post.username}
            className="w-10 h-10 rounded-full mr-3"
          />
          <span className="font-semibold text-sm">{post.username}</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-blue-500 text-sm font-semibold">Follow</button>
          <MoreHorizontal className="w-5 h-5" />
        </div>
      </div>

      <img src={post.imageUrl} alt="Post" className="w-full max-h-[500px] object-cover" />

      <div className="flex justify-between items-center px-3 pt-2">
        <div className="flex gap-4">
          <Heart className="w-6 h-6" />
          <MessageCircle className="w-6 h-6" />
          <Send className="w-6 h-6" />
        </div>
        <Bookmark className="w-6 h-6" />
      </div>

      <div className="px-3 pb-3">
        <p className="text-sm font-semibold mt-2">{post.numberOfLikes} likes</p>
        <p className="text-sm mt-1">
          <span className="font-semibold">{post.username}</span> {post.description}
        </p>
      </div>
    </div>
  )
}
