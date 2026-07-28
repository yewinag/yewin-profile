import { Panel } from "@/components/chrome/panel";
import { StatusChip } from "@/components/chrome/status-chip";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { FadeIn } from "@/components/motion/fade-in";
import { getAllPosts } from "@/lib/blog";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on frontend engineering, design systems, and building for Southeast Asia.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-6 pt-28 pb-24">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Writing
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-neon md:text-3xl">
            Blog
          </h1>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
            Notes on frontend craft, performance, and shipping products across
            APAC.
          </p>
        </FadeIn>

        <div className="mt-10 space-y-4">
          {posts.length === 0 ? (
            <Panel title="posts.log" accent="none">
              <p className="font-mono text-sm text-muted-foreground">
                No posts yet.
              </p>
            </Panel>
          ) : (
            posts.map((post, index) => (
              <FadeIn key={post.slug} delay={index * 0.06}>
                <Link href={`/blog/${post.slug}`} className="block group">
                  <Panel
                    title={`post_0${index + 1}`}
                    accent="lime"
                    headerRight={
                      <StatusChip tone="muted">{post.readingTime}</StatusChip>
                    }
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h2 className="text-lg font-medium transition-colors group-hover:text-neon">
                          {post.title}
                        </h2>
                        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                          {post.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 font-mono text-[11px] text-muted-foreground">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </time>
                        <ArrowUpRight className="size-3.5 text-neon opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                    </div>
                  </Panel>
                </Link>
              </FadeIn>
            ))
          )}
        </div>

        <FadeIn>
          <Link
            href="/"
            className="mt-10 inline-flex font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-neon"
          >
            ← cd ~/
          </Link>
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
