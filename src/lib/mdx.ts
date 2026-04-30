import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/blogs');
export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
  coverImage: string; // <-- Tambahkan ini
  content: string;
};

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.mdx'));
}

export function getPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title || 'Untitled',
    date: data.date || 'No Date',
    description: data.description || '',
    author: data.author || 'Dotlinetattu',
    coverImage: data.coverImage || '/images/default-blog.jpg', 
    content: content,
  };
}



export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;

}