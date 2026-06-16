import { AdminArticleForm } from "@/components/site/AdminArticleForm";
import { AdminPageHeader } from "@/components/site/AdminUi";
import { createArticle } from "@/app/admin/articles/actions";
import { getMediaLibrary } from "@/lib/media";

export default async function AdminNewArticlePage() {
  const mediaItems = await getMediaLibrary();

  return (
    <div>
      <AdminPageHeader
        eyebrow="Editorial"
        title="New Article"
        description="Create a database-backed article. Save as draft while editing, then publish when it is ready for the public News page."
      />
      <AdminArticleForm action={createArticle} submitLabel="Create article" mediaItems={mediaItems} />
    </div>
  );
}
