import { notFound } from "next/navigation";
import { AdminArticleForm } from "@/components/site/AdminArticleForm";
import { AdminPageHeader, AdminPanel } from "@/components/site/AdminUi";
import { deleteArticle, updateArticle } from "@/app/admin/articles/actions";
import { getEditableArticle } from "@/lib/articles";
import { getMediaLibrary } from "@/lib/media";

export default async function AdminEditArticlePage({ params }) {
  const { id } = await params;
  const [article, mediaItems] = await Promise.all([getEditableArticle(id), getMediaLibrary()]);

  if (!article) {
    notFound();
  }

  return (
    <div>
      <AdminPageHeader
        eyebrow="Editorial"
        title="Edit Article"
        description="Update the article content, SEO fields, featured image, and publication status."
      />

      <div className="grid gap-6">
        <AdminArticleForm article={article} action={updateArticle} submitLabel="Save changes" mediaItems={mediaItems} />

        <AdminPanel title="Danger zone" description="Deleting an article removes it from the database and public News pages. Static seed articles cannot be deleted here.">
          <form action={deleteArticle} className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-bold text-[#3e2723]">Delete this article</p>
              <p className="mt-1 text-sm leading-6 text-stone-500">This action cannot be undone from the dashboard.</p>
            </div>
            <input type="hidden" name="id" value={article.id} />
            <input type="hidden" name="slug" value={article.slug} />
            <button type="submit" className="rounded-sm border border-red-200 bg-red-50 px-5 py-3 text-sm font-bold text-red-700 hover:bg-red-100">
              Delete article
            </button>
          </form>
        </AdminPanel>
      </div>
    </div>
  );
}
