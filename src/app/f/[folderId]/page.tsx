import { db } from "~/server/db";
import { files as filesSchema, folders as foldersSchema } from "~/server/db/schema";
import DriveContents from "../../drive-contents";
import { eq } from "drizzle-orm";

export default async function GoogleDriveClone(props: {
  params: Promise<{ folderId: string }>
}) {
  const params = await props.params;
  const parsedFolderId = parseInt(params.folderId, 10);
  if (isNaN(parsedFolderId)) {
    return (
      <div>Invalid folder ID</div>
    )
  }

  const files = await db.select().from(filesSchema).where(eq(filesSchema.parent, parsedFolderId));
  const folders = await db.select().from(foldersSchema).where(eq(foldersSchema.parent, parsedFolderId));
  return (
    <DriveContents files={files} folders={folders} currentFolder={parsedFolderId} />
  );
}

