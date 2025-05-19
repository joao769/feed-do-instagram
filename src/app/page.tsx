"use client"

import { useEffect, useState } from 'react'
import PostItem from '@/components/PostItem'

type Post = {
  username: string
  avatarUrl: string
  imageUrl: string
  numberOfLikes: number
  description: string
  timeAgo: string
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetch('/posts.json')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Erro ao carregar posts:', err))
  }, [])

  return (
    <main className="flex flex-col items-center bg-gray-100 min-h-screen py-6">
      {posts.length > 0 && posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </main>
  )
}