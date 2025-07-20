import { FileIcon, Folder as FolderIcon } from "lucide-react";
import Link from "next/link";
import type { files, folders } from "~/server/db/schema";

export function FileRow(props: {
    file: typeof files.$inferSelect
}) {
    return (
        <li key={props.file.id} className="px-6 py-4 border-b border-gray-700 hover:bg-gray-750">
            <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-6 flex items-center">
                    <a
                        href={props.file.url}
                        className="flex items-center text-gray-100 hover:text-blue-400"
                        target="_blank"
                    >
                        <FileIcon className="mr-3" size={20} />
                        {props.file.name}
                    </a>
                </div>
                <div className="col-span-3 text-gray-400">{"File"}</div>
                <div className="col-span-3 text-gray-400">{props.file.size}</div>
            </div>
        </li>
    );
}

export function FolderRow(props: {
    folder: typeof folders.$inferSelect,
}) {
    return (
        <li key={props.folder.id} className="px-6 py-4 border-b border-gray-700 hover:bg-gray-750">
            <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-6 flex items-center">
                    <Link
                        href={`/f/${props.folder.id}`}
                        className="flex items-center text-gray-100 hover:text-blue-400"
                    >
                        <FolderIcon className="mr-3" size={20} />
                        {props.folder.name}
                    </Link>
                </div>
                <div className="col-span-3 text-gray-400">{"Folder"}</div>
                <div className="col-span-3 text-gray-400">{"--"}</div>
            </div>
        </li>
    );
}