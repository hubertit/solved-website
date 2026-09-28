"use client";

import { useState, FormEvent, DragEvent } from "react";
import { trackEvent } from "@/lib/analytics";

export default function ApplicationForm({ jobTitle }: { jobTitle: string }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleFileSelect(file: File | undefined) {
    if (file) setResumeFile(file);
  }

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files?.[0]);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    trackEvent("job_application_submit", { position: jobTitle });
    console.log("Application submitted:", {
      position: jobTitle,
      ...formData,
      resumeFileName: resumeFile?.name ?? "No file attached",
    });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-black/[.08] p-8 text-center dark:border-white/[.1]">
        <h3 className="text-lg font-semibold">Application Received!</h3>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Thanks for applying for {jobTitle}. Our team will review your
          application and get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium">
          Full Name *
        </label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-black/[.15] px-4 py-2 dark:border-white/[.2] dark:bg-black"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email *
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-black/[.15] px-4 py-2 dark:border-white/[.2] dark:bg-black"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-black/[.15] px-4 py-2 dark:border-white/[.2] dark:bg-black"
        />
      </div>

      <div>
        <label htmlFor="resumeUpload" className="block text-sm font-medium">
          Resume / CV *
        </label>
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={`mt-1 flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed px-6 py-8 text-center transition-colors ${
            isDragging
              ? "border-black bg-black/[.03] dark:border-white dark:bg-white/[.05]"
              : "border-black/[.15] dark:border-white/[.2]"
          }`}
        >
          {resumeFile ? (
            <>
              <p className="text-sm font-medium">{resumeFile.name}</p>
              <button
                type="button"
                onClick={() => setResumeFile(null)}
                className="text-xs text-zinc-500 underline hover:text-black dark:hover:text-white"
              >
                Remove and choose a different file
              </button>
            </>
          ) : (
            <>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Drag and drop your resume here, or
              </p>
              <label
                htmlFor="resumeUpload"
                className="cursor-pointer text-sm font-medium underline hover:text-zinc-600 dark:hover:text-zinc-400"
              >
                browse to upload
              </label>
              <p className="text-xs text-zinc-400">PDF, DOC or DOCX</p>
            </>
          )}
          <input
            id="resumeUpload"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => handleFileSelect(e.target.files?.[0])}
            className="hidden"
          />
        </div>
      </div>

      <div>
        <label htmlFor="coverLetter" className="block text-sm font-medium">
          Cover Letter / Message
        </label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          rows={4}
          value={formData.coverLetter}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-black/[.15] px-4 py-2 dark:border-white/[.2] dark:bg-black"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      >
        Submit Application
      </button>
    </form>
  );
}