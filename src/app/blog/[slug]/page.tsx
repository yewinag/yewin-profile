import { Panel } from "@/components/chrome/panel";
import { StatusChip } from "@/components/chrome/status-chip";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { FadeIn } from "@/components/motion/fade-in";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
  };
}

const prettyCodeOptions = {
  theme: "one-dark-pro",
  keepBackground: true,
  defaultLang: "ts",
} as const;

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-10 mb-4 text-xl font-medium tracking-tight text-foreground"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mt-8 mb-3 text-lg font-medium tracking-tight text-foreground"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4 leading-relaxed text-muted-foreground" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground"
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="mb-6 list-decimal space-y-2 pl-6 text-muted-foreground"
      {...props}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-neon underline underline-offset-4 transition-opacity hover:opacity-80"
      {...props}
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-medium text-foreground" {...props} />
  ),
  hr: () => <hr className="my-10 border-border" />,
  // Inline code vs highlighted blocks from rehype-pretty-code
  code: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLElement> & { children?: ReactNode }) => {
    const isBlock =
      typeof className === "string" &&
      (className.includes("language-") || className.includes("code-highlight"));

    if (isBlock || props["data-language" as keyof typeof props]) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }

    return (
      <code
        className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[13px] text-neon"
        {...props}
      >
        {children}
      </code>
    );
  },
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="overflow-x-auto p-0 font-mono text-[13px] leading-relaxed md:text-sm" {...props} />
  ),
  figure: (props: React.HTMLAttributes<HTMLElement>) => (
    <figure
      className="code-block mb-6 overflow-hidden rounded-lg border border-border"
      {...props}
    />
  ),
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 pt-28 pb-24">
        <FadeIn>
          <Link
            href="/blog"
            className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-neon"
          >
            ← cd ../blog
          </Link>

          <div className="mt-8">
            <Panel
              title="article.mdx"
              accent="lime"
              headerRight={
                <StatusChip tone="muted">{post.readingTime}</StatusChip>
              }
            >
              <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] text-muted-foreground">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="text-border">|</span>
                <StatusChip tone="passes">Published</StatusChip>
              </div>
              <h1 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
                {post.title}
              </h1>
              <p className="mt-3 text-base text-muted-foreground">
                {post.description}
              </p>
            </Panel>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <article className="mt-6 border border-border bg-panel/60 p-5 md:p-8">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
                },
              }}
            />
          </article>
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
