import { useUploadThing as useUploadThingOriginal } from "@uploadthing/react";
import { useState } from "react";
import type { OurFileRouter } from "~/app/api/uploadthing/core";

interface UseUploadThingOptions {
  onUploadBegin?: (fileName: string) => void;
  onUploadProgress?: (progress: number) => void;
  onUploadComplete?: (res: { fileUrl: string; fileName: string; fileSize: number; fileType: string }) => void;
  onUploadError?: (error: Error) => void;
}

export function useUploadThing(options: UseUploadThingOptions = {}) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { startUpload, ...rest } = useUploadThingOriginal<OurFileRouter>("imageUploader", {
    onUploadBegin: (fileName) => {
      setIsUploading(true);
      setError(null);
      options.onUploadBegin?.(fileName);
    },
    onUploadProgress: (progress) => {
      options.onUploadProgress?.(progress);
    },
    onUploadComplete: (res) => {
      setIsUploading(false);
      options.onUploadComplete?.(res);
    },
    onUploadError: (error) => {
      setIsUploading(false);
      setError(error);
      options.onUploadError?.(error);
    },
  });

  return {
    startUpload,
    isUploading,
    error,
    ...rest,
  };
} 