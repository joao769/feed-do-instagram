import PostItem from '@/components/PostItem'

const posts = Array.from({ length: 20 }).map((_, i) => ({
  username: `usuario${i + 1}`,
  avatarUrl: `https://i.pravatar.cc/150?img=${i + 1}`,
  imageUrl: `https://source.unsplash.com/random/800x600?sig=${i}`,
  numberOfLikes: Math.floor(Math.random() * 1000),
  description: 'Uma legenda estilosa para esta postagem!',
  timeAgo: `${Math.floor(Math.random() * 10) + 1}h`,
}))

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-gray-100 min-h-screen py-6">
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </main>
  )
}
